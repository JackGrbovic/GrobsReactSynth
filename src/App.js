import { useEffect, useState } from 'react';
import Title from './Components/Title.js';
import Keyboard from './Components/Keyboard.js';
import Synthesizer from './Synthesizer/Synthesizer.js';
import ConfigurationBlock from './Components/ConfigurationBlock.js';
import { handleKeyUp, handleKeyDown } from './utilities/eventHandlers.js';
import { getParamsToUse } from './utilities/urlHandling.js';
import Tutorial from './Components/Tutorial.js';


export default function App() {
    const [keyboardState, setKeyboardState] = useState({
        KeyQ: false,
        Digit2: false,
        KeyW: false,
        Digit3: false,
        KeyE: false,
        KeyR: false,
        Digit5: false,
        KeyT: false,
        Digit6: false,
        KeyY: false,
        Digit7: false,
        KeyU: false,
        KeyZ: false,
        KeyS: false,
        KeyX: false,
        KeyD: false,
        KeyC: false,
        KeyV: false,
        KeyG: false,
        KeyB: false,
        KeyH: false,
        KeyN: false,
        KeyJ: false,
        KeyM: false
    });

    let synthesizer = new Synthesizer(); 
    let heldKeys = [];

    const paramsToUse = getParamsToUse();

    const [waveforms, setWaveforms] = useState([
        paramsToUse['wav1'],
        paramsToUse['wav2'],
        paramsToUse['wav3'], 
        paramsToUse['wav4']
    ]);

    const [generatorSliders, setGeneratorSliders] = useState([
        [paramsToUse['osc1vol'], paramsToUse['osc1oct']],
        [paramsToUse['osc2vol'], paramsToUse['osc2oct']],
        [paramsToUse['mod1vol'], paramsToUse['mod1freq']],
        [paramsToUse['mod2vol'], paramsToUse['mod2freq']]
    ]);
    
    const [envelopeSliders, setEnvelopeSliders] = useState([
        paramsToUse['attack'], paramsToUse['decay'], paramsToUse['sustain'], paramsToUse['release']
    ]);

    useEffect(() => {
        async function handleKeyDownWrapper(e){
            await handleKeyDown(e, synthesizer, generatorSliders, waveforms, envelopeSliders, keyboardState, setKeyboardState, heldKeys);
        }
        
        function handleKeyUpWrapper(e){
            handleKeyUp(e, synthesizer, keyboardState, setKeyboardState, heldKeys);
        }
        
        document.body.addEventListener('keydown', handleKeyDownWrapper);
        document.body.addEventListener('keyup', handleKeyUpWrapper);

        return () => {
            document.body.removeEventListener('keydown', handleKeyDownWrapper);
            document.body.removeEventListener('keyup', handleKeyUpWrapper);
        }
    }, [waveforms, generatorSliders, envelopeSliders, synthesizer, heldKeys, keyboardState, setKeyboardState]);

     return (
        <div>
            <Title />
            <ConfigurationBlock waveforms={waveforms} setWaveforms={setWaveforms} generatorSliders={generatorSliders} setGeneratorSliders={setGeneratorSliders} envelopeSliders={envelopeSliders} setEnvelopeSliders={setEnvelopeSliders} />
            <Keyboard keyboardState={keyboardState} />
            <Tutorial/>
        </div>
    );
}