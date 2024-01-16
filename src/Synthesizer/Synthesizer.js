import keys from '../data/keys.js';
import frequencies from '../data/frequencies.js';
import Sound from './Sound.js';
import { removeElementsFromArrayByProperty } from '../utilities/generalUtilities.js';


let globalAudioContext = new AudioContext();

let activeSounds = [];

export default function Synthesizer(){
    this.playSoundWithInterruptableAttack = playSound;
    this.stopSound = stopSound;
    this.stopGenerators = stopGenerators;
    this.removeElementsFromArrayByProperty = removeElementsFromArrayByProperty;
    this.eventStart = eventStart;
    this.eventStop = eventStop;
    this.activeSounds = activeSounds;
}

function playSound(keycode, generatorSliders, waveforms, envelopeSliders, keyboardState){
    let note = keys.get(keycode);
    console.log(keyboardState[keycode])

    let sound = new Sound(note, waveforms[0], waveforms[1], waveforms[2], waveforms[3], generatorSliders[0], generatorSliders[1], generatorSliders[2], generatorSliders[3], envelopeSliders, globalAudioContext);

    //CONNECT AND START
    sound.carrier.start();
    sound.carrier2.start();
    sound.modulatorOsc1.start();
    sound.modulatorOsc2.start();

    activeSounds.push(sound);
}

function stopSound(note){
    let frequency = frequencies.get(note);
    let soundToEnd = {};
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

    if (soundToEnd.releaseTime > 0){
        console.log(soundToEnd.releaseTime);
        soundToEnd.noteGain.gain.setTargetAtTime(0, globalAudioContext.currentTime, (soundToEnd.releaseTime / 10));
        setTimeout(() => {stopGenerators(soundToEnd); }, (soundToEnd.releaseTime * 200));
        activeSounds = removeElementsFromArrayByProperty(activeSounds, "frequency", frequency);
    }
    else{
        console.log(soundToEnd.releaseTime);
        soundToEnd.primaryGain.gain.setTargetAtTime(0, globalAudioContext.currentTime, 0.015);
        setTimeout(() => {stopGenerators(soundToEnd); }, 15);
        activeSounds = removeElementsFromArrayByProperty(activeSounds, "frequency", frequency);
    }
}

function stopGenerators(soundToEnd){
    soundToEnd.modulatorOsc1.stop();
    soundToEnd.modulatorOsc2.stop();
    soundToEnd.carrier.stop();
    soundToEnd.carrier2.stop();
}

async function eventStart(e, isKeyboardButton, generatorSliders, waveforms, envelopeSliders, keyboardState){
    if (isKeyboardButton){
        await playSound(e.code, generatorSliders, waveforms, envelopeSliders, keyboardState);
    }
}

function eventStop(keycode, isKeyboardButton){
    if(isKeyboardButton){
        var note = keys.get(keycode);
        stopSound(note);
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}