export function handleSetKeyboardState(keyboardState, setKeyboardState, keycode, value){
    let newKeyboardState = {...keyboardState};
    newKeyboardState[keycode] = value;
    setKeyboardState(newKeyboardState);
    console.log(keyboardState[keycode]);
}

export function whiteOrBlackKey(note){
    if (note[1] === 's' || note[1] === 'b') return 'blackkey';
    else return 'whitekey';
}

export function noteToUpper(note){
    let letterToCapitalise = note[0].toUpperCase();
    let restOfNote = "";

    for (let i = 1; i < note.length; i ++){
        restOfNote += note[i];
    }

    let newNote = letterToCapitalise + restOfNote;

    return newNote;
}

export function keyNameClass(className){
    if (className === 'whitekey') return 'keyname';
    else return 'keynameblack';
}

export function keyButtonNameClass(className){
    if (className === 'whitekey') return 'keybuttonname';
    else return 'keybuttonnameblack';
}

export function returnLastCharacter(keycode){
    let result = keycode[keycode.length -1]
    return result;
}