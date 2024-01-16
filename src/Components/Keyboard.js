import XAxisKeyPositions from "../data/XAxisKeyPositions.js";
import KeyboardKey from './KeyboardKey.js';

export default function Keyboard({keyboardState}){
    let upperKeyboardState = Object.entries(keyboardState).slice(0, Object.entries(keyboardState).length / 2);
    let lowerKeyboardState = Object.entries(keyboardState).slice(Object.entries(keyboardState).length / 2, Object.entries(keyboardState).length);

    return(
        <>
            <div className={'flexcontainer'} style={{marginTop: '10px'}} id={'keyboardUpper'}>
                <div style={{position: 'relative', width: '840px', height: '190px', marginTop: '20px'}}>
                    {upperKeyboardState.map((singleKeyState, index) => (
                        <KeyboardKey key={index} keycode={singleKeyState[0]} currentStateOfKey={singleKeyState[1]} xAxisPosition={XAxisKeyPositions[index]} marginTop={'0%'} />
                    ))}
                </div>
            </div>
            <div className={'flexcontainer'} style={{marginTop: '10px;'}} id={'keyboardLower'}>
                <div style={{position: 'relative', width: '840px', height: '190px', marginTop: '20px'}}>
                    {lowerKeyboardState.map((singleKeyState, index) => (
                        <KeyboardKey key={index} keycode={singleKeyState[0]} currentStateOfKey={singleKeyState[1]} xAxisPosition={XAxisKeyPositions[index]} marginTop={'0%'} />
                    ))}
                </div>
            </div>
        </>
    )
}