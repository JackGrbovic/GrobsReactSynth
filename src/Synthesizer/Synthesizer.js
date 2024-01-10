import keys from '../data/keys.js';
import frequencies from '../data/frequencies.js';
import Sound from './Sound.js';
import { removeElementsFromArrayByProperty } from '../utilities/generalUtilities.js';

let globalAudioContext = new AudioContext;

let activeSounds = [];

export default function Synthesizer(){
    this.playSound = playSound;
    this.stopSound = stopSound;
    this.stopGenerators = stopGenerators;
    this.removeElementsFromArrayByProperty = removeElementsFromArrayByProperty;
    this.eventStart = eventStart;
    this.eventStop = eventStop;
    this.activeSounds = activeSounds;
}

//need to figure out how to not fully play attack if keyt is let go before it is reached
function playSound(key, generatorSliders, waveforms, envelopeSliders){
    let sound = new Sound(key, waveforms[0], waveforms[1], waveforms[2], waveforms[3], generatorSliders[0], generatorSliders[1], generatorSliders[2], generatorSliders[3], envelopeSliders, globalAudioContext);

    //CONNECT AND START
    sound.carrier.start();
    sound.carrier2.start();
    sound.modulatorOsc1.start();
    sound.modulatorOsc2.start();

    activeSounds.push(sound);
}


function stopSound(note){
    let frequency = frequencies.get(note);
    let soundToEnd = new Object();
    let soundCounter = 0;

    for (let sound of activeSounds){
        if(sound.frequency === frequency){
            soundToEnd = sound;
            soundCounter++;
        }
    }
    
    while (soundCounter > 1){
        for (let sound of activeSounds){
            if (sound.frequency === frequency){
                stopGenerators(sound);
                soundCounter--;
            }
        }
    }

    if(soundToEnd.releaseTime > 0){
        soundToEnd.noteGain.gain.linearRampToValueAtTime(0.0000000001, globalAudioContext.currentTime + (soundToEnd.releaseTime / 10));
        //may need to refactor the below line to an arrow function with a callback because this looks wacky
        setTimeout(function(){stopGenerators(soundToEnd); }, (soundToEnd.releaseTime * 100));
        activeSounds = removeElementsFromArrayByProperty(activeSounds, "frequency", frequency);
    }
    else if(soundToEnd.releaseTime === 0){
        stopGenerators(soundToEnd);
        activeSounds = removeElementsFromArrayByProperty(activeSounds, "frequency", frequency);
    }
    else return;
}


function stopGenerators(soundToEnd){
    soundToEnd.modulatorOsc1.stop();
    soundToEnd.modulatorOsc2.stop();
    soundToEnd.carrier.stop();
    soundToEnd.carrier2.stop();
}


function eventStart(e, isKeyboardButton, generatorSliders, waveforms, envelopeSliders){
    if (isKeyboardButton){
        let note = keys.get(e.code);
        playSound(note, generatorSliders, waveforms, envelopeSliders);
    }
}


function eventStop(keycode, isKeyboardButton){
    if(isKeyboardButton){

        var note = keys.get(keycode);
        stopSound(note);
    }
}


function activeSoundsAboveZero(activeSounds){
    if (activeSounds > 0) return activeSounds.length - 1;
    return 0;
}