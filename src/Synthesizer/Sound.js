import frequencies from "../data/frequencies";

export default function Sound(note, waveform1, waveform2, waveform3, waveform4, oscillator1Sliders, oscillator2Sliders, modulator1Sliders, modulator2Sliders, envelopeSliders, globalAudioContext){
    const frequency = frequencies.get(note);
    this.frequency = frequency;

    //CARRIER 1
    this.carrierFrequencySlider = oscillator1Sliders[1];
    this.carrierGain = new GainNode(globalAudioContext,{gain:oscillator1Sliders[0]/100});
   
    
    this.carrier = new OscillatorNode(globalAudioContext,{frequency:frequency * (2 * oscillator1Sliders[1])});
    this.carrier.type = waveform1;
    
    //CARRIER 2
    this.carrierFrequencySlider2 = oscillator2Sliders[1];
    
    this.carrierGain2 = new GainNode(globalAudioContext,{gain:oscillator2Sliders[0]/100});
    
    this.carrier2 = new OscillatorNode(globalAudioContext,{frequency:frequency * (2 * oscillator2Sliders[1])});
    this.carrier2.type = waveform2;
    
    //MODULATOR 1
    this.modulationFrequencySlider1 = modulator1Sliders[0];
    this.modulationDepthSlider1 = modulator1Sliders[1];
    
    this.modulatorOsc1 = new OscillatorNode(globalAudioContext,{frequency:modulator1Sliders[1]});
    this.modulatorOsc1.type = waveform3;
    this.modulator1 = new GainNode(globalAudioContext,{gain:modulator1Sliders[0]})
    
    //MODULATOR 2
    this.modulationFrequencySlider2 = modulator2Sliders[0];
    this.modulationDepthSlider2 = modulator2Sliders[1];
    
    this.modulatorOsc2 = new OscillatorNode(globalAudioContext,{frequency:modulator2Sliders[1]});
    this.modulatorOsc2.type = waveform4;
    this.modulator2 = new GainNode(globalAudioContext,{gain:modulator2Sliders[0]})
    
    //ADSR
    this.attackTime = envelopeSliders[0]/10;
    this.decayTime = envelopeSliders[1]/10;
    this.sustainLevel = envelopeSliders[2]/100;
    this.releaseTime = envelopeSliders[3];
    
    this.noteGain = new GainNode(globalAudioContext);
    let now = globalAudioContext.currentTime;
    this.noteGain.gain.setValueAtTime(0, now);
    if (this.attackTime > 0 && this.decayTime === 0){
        this.noteGain.gain.setTargetAtTime(1, now, this.attackTime);
    }
    else if (this.decayTime > 0 && this.attackTime === 0){
        this.noteGain.gain.setValueAtTime(1, now);
        this.noteGain.gain.setTargetAtTime(this.sustainLevel, now, this.decayTime);
    }
    else if (this.attackTime > 0 && this.decayTime > 0){
        this.noteGain.gain.setTargetAtTime(1, now, this.attackTime);
        setTimeout(() => {this.noteGain.gain.setTargetAtTime(this.sustainLevel, now, this.decayTime); }, (this.attackTime * 1000));
    }
    else{
        this.noteGain.gain.setValueAtTime(1, now);
    }

    //PRIMARY GAIN
    this.primaryGain = new GainNode(globalAudioContext,{gain:0.07});

    //CONNECT AND START
    this.modulatorOsc1.connect(this.modulator1);
    this.modulatorOsc2.connect(this.modulator2);
    
    this.modulator1.connect(this.carrier.frequency);
    this.modulator2.connect(this.carrier.frequency);
    
    this.modulator1.connect(this.carrier2.frequency);
    this.modulator2.connect(this.carrier2.frequency);
    
    //CONFIGURE GAIN        
    this.carrier.connect(this.carrierGain);
    this.carrier2.connect(this.carrierGain2);
    this.carrierGain.connect(this.noteGain);
    this.carrierGain2.connect(this.noteGain);
    this.noteGain.connect(this.primaryGain);
    this.primaryGain.connect(globalAudioContext.destination);
}
