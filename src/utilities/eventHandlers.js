import { removeElementsFromArrayByProperty } from "./generalUtilities";
import { handleSetKeyState } from "./keyboardUtilities";

export function handleKeyUp(e, synth, keyState, setKeyState, heldKeys){
    let isKeycodeValid = validateKeyboardKeycode(e.code, keyState);
    if (isKeycodeValid){
        handleSetKeyState(keyState, setKeyState, e.code, false);
        synth.eventStop(e.code, true);
        heldKeys = removeElementsFromArrayByProperty(heldKeys, "code", e.code)
    }
}

//we need to remove heldKeys from the equation here. This will mean ensuring that synthesizer relies on keyState to start and end its sounds
export function handleKeyDown(e, synth, generatorSliders, waveforms, envelopeSliders, keyState, setKeyState, heldKeys){
    let isKeycodeValid = validateKeyboardKeycode(e.code, keyState);
    let componentKeyState = keyState[e.code];
  
    if (e.repeat || isKeycodeValid === false || componentKeyState === undefined || componentKeyState === true){
        console.log("Returning");
        return;
    }
    else{
        handleSetKeyState(keyState, setKeyState, e.code, true);
        synth.eventStart(e, true, generatorSliders, waveforms, envelopeSliders);
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