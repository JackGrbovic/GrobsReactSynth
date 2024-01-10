import { keyButtonNameClass, keyNameClass, noteToUpper, returnLastCharacter } from "../utilities/keyboardUtilities";
import keys from "../data/keys";
import { whiteOrBlackKey } from "../utilities/keyboardUtilities";

export default function KeyboardKey({marginTop, currentStateOfKey, xAxisPosition, keycode}){
    let note = keys.get(keycode);
    let className = whiteOrBlackKey(note);

    function updateClassName(className){
        let classNameToReturn;

        if (className === "whitekey" && currentStateOfKey === true) classNameToReturn = "whitekeypresseddown";
        else if (className === "blackkey" && currentStateOfKey === true) classNameToReturn = "blackkeypresseddown";
        else if (className === "whitekeypresseddown" && currentStateOfKey === false) classNameToReturn = "whitekey";
        else if (className === "blackkeypresseddown" && currentStateOfKey === false) classNameToReturn = "blackkey";

        console.log(className);
        console.log(classNameToReturn);
        className = classNameToReturn;
        return classNameToReturn;
    }

    if (currentStateOfKey === true){
        className = updateClassName(className);
    }
    return(
        <div className={className} id={keycode} style={{position: 'absolute', top: marginTop, left: xAxisPosition}}>
            <p className={keyNameClass(className)}>{noteToUpper(note)}/</p>
            <p className={keyButtonNameClass(className)}>{returnLastCharacter(keycode)}</p>
        </div>
    );
}