import Key from "./Key"

export function handleKeyDown(e, key, synth){
    
    if (key.className === "whitekey"){
        key.className = "whitekeypresseddown";
    }
    else key.className = "blackkeypresseddown";
}


export function handleKeyUp(key){
    if (key.className === "whitekeypresseddown"){
        key.className = "whitekey";
    }
    else key.className = "blackkey";
}


let heldKeys = [];

export function isKeyAlreadyPressed(e){
    for (let key of heldKeys){
        if (key.code === e.code){
            return true;
        }
    }
}


// //to change colour of key onKeyDown, we can find the key with an id that matches either the keycode or note from keycode (whatever it is we defined it as)
// function AllKeys({isUpper, handleKeyDown, handleKeyUp, synth}){
//     //either figure out how to render the array or just render each component manually
//     let keysToReturn = [];





//     // if(isUpper){
//     //     for (let i = 0; i < (keycodes.length / 2); i ++){
//     //         keysToReturn.push(<Key className={whiteOrBlackKey(keys.get(keycodes[i]))} note={keys.get(keycodes[i])} keycode={keycodes[i]} xAxisPosition={XAxisKeyPositions[i]} marginTop={'0%'} ref={React.useRef(whiteOrBlackKey(keys.get(keycodes[i])))}/>)
//     //     }
//     //     //const listItems = keysToReturn.map((value, index) => (<Key key={index} value={value}/>));
//     //     return(
//     //         <>
//     //             {keysToReturn}
//     //         </>
//     //     )
//     // }
//     // else{
//     //     for (let i = (keycodes.length / 2); i < keycodes.length; i ++){
//     //         let normalI = i - (keycodes.length/2);
//     //         keysToReturn.push(<Key className={whiteOrBlackKey(keys.get(keycodes[i]))} note={keys.get(keycodes[i])} keycode={keycodes[i]} xAxisPosition={XAxisKeyPositions[normalI]} marginTop={'0%'} ref={React.useRef(whiteOrBlackKey(keys.get(keycodes[i])))}/>)
//     //     }
//     //     return(
//     //         <>
//     //             {keysToReturn}
//     //         </>
//     //     )
//     // }

//     return (
//     <>
//         <div class={'containingdiv'} style={{marginTop: '10px'}} id={'keyboardUpper'}>
//                 <div style={{position: 'relative', width: '840px', height: '190px', marginTop: '20px'}}>
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[0]))} note={keys.get(keycodes[0])} keycode={keycodes[0]} xAxisPosition={XAxisKeyPositions[0]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[1]))} note={keys.get(keycodes[1])} keycode={keycodes[1]} xAxisPosition={XAxisKeyPositions[1]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[2]))} note={keys.get(keycodes[2])} keycode={keycodes[2]} xAxisPosition={XAxisKeyPositions[2]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[3]))} note={keys.get(keycodes[3])} keycode={keycodes[3]} xAxisPosition={XAxisKeyPositions[3]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[4]))} note={keys.get(keycodes[4])} keycode={keycodes[4]} xAxisPosition={XAxisKeyPositions[4]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[5]))} note={keys.get(keycodes[5])} keycode={keycodes[5]} xAxisPosition={XAxisKeyPositions[5]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[6]))} note={keys.get(keycodes[6])} keycode={keycodes[6]} xAxisPosition={XAxisKeyPositions[6]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[7]))} note={keys.get(keycodes[7])} keycode={keycodes[7]} xAxisPosition={XAxisKeyPositions[7]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[8]))} note={keys.get(keycodes[8])} keycode={keycodes[8]} xAxisPosition={XAxisKeyPositions[8]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[9]))} note={keys.get(keycodes[9])} keycode={keycodes[9]} xAxisPosition={XAxisKeyPositions[9]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[10]))} note={keys.get(keycodes[10])} keycode={keycodes[10]} xAxisPosition={XAxisKeyPositions[10]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[11]))} note={keys.get(keycodes[11])} keycode={keycodes[11]} xAxisPosition={XAxisKeyPositions[11]} marginTop={'0%'} />
//             </div>
//         </div>

//         <div class='containingdiv' style={{marginTop: '10px;'}} id={'keyboardLower'}>
//                 <div style={{position: 'relative', width: '840px', height: '190px', marginTop: '20px'}}>
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[12]))} note={keys.get(keycodes[12])} keycode={keycodes[12]} xAxisPosition={XAxisKeyPositions[0]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[13]))} note={keys.get(keycodes[13])} keycode={keycodes[13]} xAxisPosition={XAxisKeyPositions[1]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[14]))} note={keys.get(keycodes[14])} keycode={keycodes[14]} xAxisPosition={XAxisKeyPositions[2]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[15]))} note={keys.get(keycodes[15])} keycode={keycodes[15]} xAxisPosition={XAxisKeyPositions[3]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[16]))} note={keys.get(keycodes[16])} keycode={keycodes[16]} xAxisPosition={XAxisKeyPositions[4]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[17]))} note={keys.get(keycodes[17])} keycode={keycodes[17]} xAxisPosition={XAxisKeyPositions[5]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[18]))} note={keys.get(keycodes[18])} keycode={keycodes[18]} xAxisPosition={XAxisKeyPositions[6]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[19]))} note={keys.get(keycodes[19])} keycode={keycodes[19]} xAxisPosition={XAxisKeyPositions[7]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[20]))} note={keys.get(keycodes[20])} keycode={keycodes[20]} xAxisPosition={XAxisKeyPositions[8]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[21]))} note={keys.get(keycodes[21])} keycode={keycodes[21]} xAxisPosition={XAxisKeyPositions[9]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[22]))} note={keys.get(keycodes[22])} keycode={keycodes[22]} xAxisPosition={XAxisKeyPositions[10]} marginTop={'0%'} />
//                     <Key className={whiteOrBlackKey(keys.get(keycodes[23]))} note={keys.get(keycodes[23])} keycode={keycodes[23]} xAxisPosition={XAxisKeyPositions[11]} marginTop={'0%'} />
//                 </div>
//         </div>
        
//     </>);
// }


//provides the className prop
export function whiteOrBlackKey(note){
    let noteLetterIndex;

    if (note[note.length -1] === '1'){
        noteLetterIndex = note.length - 2;
    }
    else noteLetterIndex = note.length - 1;

    if (note[1] === 's' || note[1] === 'b') return 'blackkey';
    else return 'whitekey';
}





export function NoteToUpper(note){
    let letterToCapitalise = note[0].toUpperCase();
    let restOfNote = "";

    for (let i = 1; i < note.length; i ++){
        restOfNote += note[i];
    }

    let newNote = letterToCapitalise + restOfNote;

    return newNote;
}

export function KeyNameClass(className){
    if (className === 'whitekey') return 'keyname';
    else return 'keynameblack';
}

export function KeyButtonNameClass(className){
    if (className === 'whitekey') return 'keybuttonname';
    else return 'keybuttonnameblack';
}

export function returnLastCharacter(keycode){
    let result = keycode[keycode.length -1]
    return result;
}
