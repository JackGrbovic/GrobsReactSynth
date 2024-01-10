import XAxisKeyPositions from "../data/XAxisKeyPositions.js";
import KeyboardKey from './KeyboardKey.js';

export default function Keyboard({upperKeyboardState, lowerKeyboardState}){
    return(
        <>
            <div className={'flexcontainer'} style={{marginTop: '10px'}} id={'keyboardUpper'}>
                <div style={{position: 'relative', width: '840px', height: '190px', marginTop: '20px'}}>
                    {Object.entries(upperKeyboardState).filter(([key]) => typeof key === 'string' || typeof key === 'symbol').map((singleKeyState, index) => (
                        <KeyboardKey key={index} keycode={singleKeyState[0]} currentStateOfKey={singleKeyState[1]} xAxisPosition={XAxisKeyPositions[index]} marginTop={'0%'} />
                    ))} 
                </div>
            </div>
            <div className={'flexcontainer'} style={{marginTop: '10px;'}} id={'keyboardLower'}>
                <div style={{position: 'relative', width: '840px', height: '190px', marginTop: '20px'}}>
                    {Object.entries(lowerKeyboardState).filter(([key]) => typeof key === 'string' || typeof key === 'symbol').map((singleKeyState, index) => (
                        <KeyboardKey key={index} keycode={singleKeyState[0]} currentStateOfKey={singleKeyState[1]} xAxisPosition={XAxisKeyPositions[index]} marginTop={'0%'} />
                    ))}
                </div>
            </div>
        </>
    )
}