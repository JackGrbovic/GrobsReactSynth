import { removeElementsFromArrayByProperty } from "./generalUtilities";
import { handleSetKeyboardState } from "./keyboardUtilities";

export function handleKeyUp(e, synth, keyboardState, setKeyboardState, heldKeys){
    let isKeycodeValid = validateKeyboardKeycode(e.code, keyboardState);
    if (isKeycodeValid){
        handleSetKeyboardState(keyboardState, setKeyboardState, e.code, false);
        synth.eventStop(e.code, true);
        heldKeys = removeElementsFromArrayByProperty(heldKeys, "code", e.code)
    }
}

export function handleKeyDown(e, synth, generatorSliders, waveforms, envelopeSliders, keyboardState, setKeyboardState, heldKeys){
    let isKeycodeValid = validateKeyboardKeycode(e.code, keyboardState);
    let componentKeyState = keyboardState[e.code];
  
    if (e.repeat || isKeycodeValid === false || componentKeyState === undefined || componentKeyState === true){
        return;
    }
    else{
        handleSetKeyboardState(keyboardState, setKeyboardState, e.code, true);
        synth.eventStart(e, true, generatorSliders, waveforms, envelopeSliders, keyboardState);
        heldKeys.push(e);
    }
}

function validateKeyboardKeycode(keycodeToValidate, keyboardState){
    const keysOfKeyboardState = Object.entries(keyboardState);
    for (let i = 0; i < keysOfKeyboardState.length; i++){
        if(keysOfKeyboardState[i][0] === keycodeToValidate) return true;
    }
    return false;
}