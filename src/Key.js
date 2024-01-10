import { KeyButtonNameClass, KeyNameClass, NoteToUpper, returnLastCharacter } from "./keyboardUtilities";

export default function Key({className, note, keycode, xAxisPosition, marginTop, handleKeyDown, synth}){
    let thisKey = this;

    return(
        <div className={className} id={keycode} style={{position: 'absolute', top: {marginTop}, left: xAxisPosition}}>
            <p className={KeyNameClass(className)}>{NoteToUpper(note)}/</p>
            <p className={KeyButtonNameClass(className)}>{returnLastCharacter(keycode)}</p>
        </div>
    );
}