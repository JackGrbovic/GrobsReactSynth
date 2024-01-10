import { useEffect, useState } from 'react';
import Title from './Components/Title.js';
import Keyboard from './Components/Keyboard.js';
import Synthesizer from './Synthesizer/Synthesizer.js';
import ConfigurationBlock from './Components/ConfigurationBlock.js';
import { handleKeyUp, handleKeyDown } from './utilities/eventHandlers.js';
import { getParamsToUse } from './utilities/urlHandling.js';
import Tutorial from './Components/Tutorial.js';


export default function App() {
    //maybe wrap both of these in useMemo
    let synthesizer = new Synthesizer(); 
    let heldKeys = [];

    //declare an object from which the values of the url are fed into. If the values are null, we set them to the starting values
    //the usestates all get theirstarting values from this object
    //we can sort out this in urlHandling

    const [upperKeyboardState, setUpperKeyboardState] = useState({
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
        KeyU: false
    });

    const [lowerKeyboardState, setLowerKeyboardState] = useState({
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

    const paramsToUse = getParamsToUse();
    console.log(paramsToUse);

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

    //something wrong with release, probably in our getRelevantParams function

    useEffect(() => {
        function handleKeyDownWrapper(e){
            handleKeyDown(e, synthesizer, generatorSliders, waveforms, envelopeSliders, upperKeyboardState, setUpperKeyboardState, heldKeys);
            handleKeyDown(e, synthesizer, generatorSliders, waveforms, envelopeSliders, lowerKeyboardState, setLowerKeyboardState, heldKeys);
        }
        
        function handleKeyUpWrapper(e){
            handleKeyUp(e, synthesizer, upperKeyboardState, setUpperKeyboardState, heldKeys);
            handleKeyUp(e, synthesizer, lowerKeyboardState, setLowerKeyboardState, heldKeys);
        }
        
        document.body.addEventListener('keydown', handleKeyDownWrapper);
        document.body.addEventListener('keyup', handleKeyUpWrapper);

        return () => {
            document.body.removeEventListener('keydown', handleKeyDownWrapper);
            document.body.removeEventListener('keyup', handleKeyUpWrapper);
        }
    }, [waveforms, generatorSliders, envelopeSliders, synthesizer, upperKeyboardState, setUpperKeyboardState, lowerKeyboardState, setLowerKeyboardState, heldKeys]);
    //look at putting dep array into iefe or do something else


    //make sure the components below are not themselves, props, and that they are declared where they should be (generators declared within configuration block for example)
    
    //just pass upperkeys etc the list of entries and then map within keyboard
    //Browser API

     return (
        <div>
            <Title />
            <ConfigurationBlock waveforms={waveforms} setWaveforms={setWaveforms} generatorSliders={generatorSliders} setGeneratorSliders={setGeneratorSliders} envelopeSliders={envelopeSliders} setEnvelopeSliders={setEnvelopeSliders} />
            <Keyboard upperKeyboardState={upperKeyboardState} lowerKeyboardState={lowerKeyboardState} />
            <Tutorial/>
        </div>
    );
}



















/*      ---Leftover code for touch event listeners---


        var keyboardUpper = document.getElementById("keyboardUpper")
        var keyboardUpperChildren = keyboardUpper.children;
        for(var i = 0; i < keyboardUpperChildren.length; i++){
            this.addMouseAndTouchEventListeners(keyboardUpperChildren[i]);
        }

        var keyboardLower = document.getElementById("keyboardLower")
        var keyboardLowerChildren = keyboardLower.children;
        for(var i = 0; i < keyboardLowerChildren.length; i++){
            this.addMouseAndTouchEventListeners(keyboardLowerChildren[i]);
        }
    }


    addMouseAndTouchEventListeners(child){
        child.addEventListener('touchstart', (e) => {
            this.eventStart(e);
        });
        child.addEventListener('touchcancel', (e) => {
            this.eventStop(e);
        });
        child.addEventListener('touchstop', (e) => {
            this.eventStop(e);
        });

        child.addEventListener('mousedown', (e) => {
            this.eventStart(e);
        });
        child.addEventListener('mouseout', (e) => {
            if(this.activeSounds.length > 0){
                this.eventStop(e);
            }
        });
        child.addEventListener('mouseup', (e) => {
            this.eventStop(e);
        });

        child.addEventListener('blur', (e) => {
            this.eventStop(e);
        });
    }
*/









/*



---INDEX.HTML---

<!doctype html>
<html>
    <head>
        <title>Grob's Synth</title>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1 class="title" style="margin: 10px 10px 10px 10px;">Grob's Synth</h1>

        <div class="containingdiv" style="margin-top: 50px;">
            <div class = "rangeblock" id="Oscillator1">
                <div class="labelcontainer">
                    <p class="label">Oscillator 1</p>
                </div>
                <input type="range" min="0" max="200" value="100" class="slider" id="carrierGainSlider">
                <input type="range" min="0" max="6" value="2" class="slider" id="carrierFrequencySlider">
                <div class="dropdown">
                    <button class="dropbtn" id ="dropdown1">Sine</button>
                    <div class="dropdown-content">
                        <a id="sine1">Sine</a>
                        <a id="square1">Square</a>
                        <a id="triangle1">Triangle</a>
                        <a id="sawtooth1">Sawtooth</a>
                    </div>
                </div>
            </div>
            
                <div class = "rangeblock" id="Oscillator2">
                    <div class="labelcontainer">
                        <p class="label">Oscillator 2</p>
                    </div>
                    <input type="range" min="0" max="200" value="50" class="slider" id="carrierGainSlider2">
                    <input type="range" min="0" max="4" value="2" class="slider" id="carrierFrequencySlider2">
                    <div class="dropdown">
                        <button class="dropbtn" id ="dropdown2">Square</button>
                        <div class="dropdown-content">
                            <a id="sine2">Sine</a>
                            <a id="square2">Square</a>
                            <a id="triangle2">Triangle</a>
                            <a id="sawtooth2">Sawtooth</a>
                        </div>
                    </div>
                </div>
            
            <div class="rangeblock" id="Modulator1">
                <div class="labelcontainer">
                    <p class="label">Modulator 1</p>
                </div>
                <input type="range" min="0" max="1000" value="0" class="slider" id="modulationDepthSlider1">
                <input type="range" min="0" max="1000" value="0" class="slider" id="modulationFrequencySlider1">
                <div class="dropdown">
                    <button class="dropbtn" id ="dropdown3">Triangle</button>
                    <div class="dropdown-content">
                        <a id="sine3">Sine</a>
                        <a id="square3">Square</a>
                        <a id="triangle3">Triangle</a>
                        <a id="sawtooth3">Sawtooth</a>
                    </div>
                </div>
            </div> 
            
            <div class="rangeblock" id="Modulator2">
                <div class="labelcontainer">
                    <p class="label">Modulator 2</p>
                </div>
                <input type="range" min="0" max="1000" value="0" class="slider" id="modulationDepthSlider2">
                <input type="range" min="0" max="1000" value="0" class="slider" id="modulationFrequencySlider2">
                <div class="dropdown">
                    <button class="dropbtn" id ="dropdown4">Sawtooth</button>
                    <div class="dropdown-content">
                        <a id="sine4">Sine</a>
                        <a id="square4">Square</a>
                        <a id="triangle4">Triangle</a>
                        <a id="sawtooth4">Sawtooth</a>
                    </div>
                </div>
            </div> 
            
            <div class="rangeblock" id="Envelope">
                <div class="labelcontainer">
                    <p class="label">Envelope</p>
                </div>
                <input type="range" min="0" max="100" value="0" class="slider" id="attackSlider">
                <input type="range" min="0" max="100" value="0" class="slider" id="decaySlider">
                <input type="range" min="0" max="100" value="30" class="slider" id="sustainSlider">
                <input type="range" min="0" max="40" value="0" class="slider" id="releaseSlider">
            </div> 
        </div>

        <div class="containingdiv" style="margin-top: 10px;" id="keyboardUpper">
            <div style="position: relative; width: 840px; height: 190px; margin-top: 20px;">
                <div class="whitekey" id="c1" style="position: absolute; top: 0%; left: 0%;">
                    <p class="keyname">C1/</p>
                    <p class="keybuttonname">Q</p>
                </div>

                <div class="blackkey" id="cs1" style="position: absolute; top: 0%; left: 9%; z-index: 1;">
                    <p class="keynameblack">C#1/</p>
                    <p class="keybuttonnameblack">2</p>
                </div>

                <div class="whitekey" id="d1" style="position: absolute; top: 0%; left: 14.2857%;">
                    <p class="keyname">D1/</p>
                    <p class="keybuttonname">W</p>
                </div>

                <div class="blackkey" id="eb1" style="position: absolute; top: 0%; left: 23.5%; z-index: 1;">
                    <p class="keynameblack">Eb1/</p>
                    <p class="keybuttonnameblack">3</p>
                </div>

                <div class="whitekey" id="e1" style="position: absolute; top: 0%; left: 28.5714%;">
                    <p class="keyname">E1/</p>
                    <p class="keybuttonname">E</p>
                </div>

                <div class="whitekey" id="f1" style="position: absolute; top: 0%; left: 42.8571%;">
                    <p class="keyname">F1/</p>
                    <p class="keybuttonname">R</p>
                </div>

                <div class="blackkey" id="fs1" style="position: absolute; top: 0%; left: 37.8%; z-index: 1;">
                    <p class="keynameblack">F#1/</p>
                    <p class="keybuttonnameblack">4</p>
                </div>

                <div class="whitekey" id="g1" style="position: absolute; top: 0%; left: 57.1428%;">
                    <p class="keyname">F1/</p>
                    <p class="keybuttonname">T</p>
                </div>

                <div class="blackkey" id="gs1" style="position: absolute; top: 0%; left: 66.2%; z-index: 1;">
                    <p class="keynameblack">G#1/</p>
                    <p class="keybuttonnameblack">6</p>
                </div>

                <div class="whitekey" id="a1" style="position: absolute; top: 0%; left: 71.4285%;">
                    <p class="keyname">A1/</p>
                    <p class="keybuttonname">Y</p>
                </div>
                    
                <div class="blackkey" id="bb1" style="position: absolute; top: 0%; left: 80.5%; z-index: 1;">
                    <p class="keynameblack">Bb1/</p>
                    <p class="keybuttonnameblack">7</p>
                </div>
                
                <div class="whitekey" id="b1" style="position: absolute; top: 0%; left: 85.7142%;">
                    <p class="keyname">B1/</p>
                    <p class="keybuttonname">U</p>
                </div>
            </div>
        </div>

        <div class="containingdiv" style="margin-top: 10px;" id="keyboardLower">
            <div style="position: relative; width: 840px; height: 190px; margin-top: 10px;">
                <div class="whitekey" id="c" style="position: absolute; top: 0%; left: 0%;">
                    <p class="keyname">C/</p>
                    <p class="keybuttonname">Z</p>
                </div>

                <div class="blackkey" id="cs" style="position: absolute; top: 0%; left: 9%; z-index: 1;">
                    <p class="keynameblack">C#/</p>
                    <p class="keybuttonnameblack">S</p>
                </div>

                <div class="whitekey" id="d" style="position: absolute; top: 0%; left: 14.2857%;">
                    <p class="keyname">D/</p>
                    <p class="keybuttonname">X</p>
                </div>

                <div class="blackkey" id="eb" style="position: absolute; top: 0%; left: 23.5%; z-index: 1;">
                    <p class="keynameblack">Eb/</p>
                    <p class="keybuttonnameblack">D</p>
                </div>

                <div class="whitekey" id="e" style="position: absolute; top: 0%; left: 28.5714%;">
                    <p class="keyname">E/</p>
                    <p class="keybuttonname">C</p>
                </div>

                <div class="whitekey" id="f" style="position: absolute; top: 0%; left: 42.8571%;">
                    <p class="keyname">F/</p>
                    <p class="keybuttonname">V</p>
                </div>

                <div class="blackkey" id="fs" style="position: absolute; top: 0%; left: 37.8%; z-index: 1;">
                    <p class="keynameblack">F#/</p>
                    <p class="keybuttonnameblack">F</p>
                </div>

                <div class="whitekey" id="g" style="position: absolute; top: 0%; left: 57.1428%;">
                    <p class="keyname">G/</p>
                    <p class="keybuttonname">B</p>
                </div>

                <div class="blackkey" id="gs" style="position: absolute; top: 0%; left: 66.2%; z-index: 1;">
                    <p class="keynameblack">G#/</p>
                    <p class="keybuttonnameblack">H</p>
                </div>

                <div class="whitekey" id="a" style="position: absolute; top: 0%; left: 71.4285%;">
                    <p class="keyname">A/</p>
                    <p class="keybuttonname">N</p>
                </div>

                <div class="blackkey" id="bb" style="position: absolute; top: 0%; left: 80.5%; z-index: 1;">
                    <p class="keynameblack">Bb/</p>
                    <p class="keybuttonnameblack">J</p>
                </div>

                <div class="whitekey" id="b" style="position: absolute; top: 0%; left: 85.7142%;">
                    <p class="keyname">B/</p>
                    <p class="keybuttonname">M</p>
                </div>
            </div>
        </div>
            
        
        <script src="index.js" type="module"></script>
    </body>
</html>

---INDEX.HTML---
        
*/