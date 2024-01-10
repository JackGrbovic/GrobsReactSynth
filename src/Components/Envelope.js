export default function Envelope({envelopeSliders, setEnvelopeSliders}){
    
    function handleChangeEnvelopeSlider(index, value){
        let newArray = [...envelopeSliders];
        newArray[index] = value;
        setEnvelopeSliders(newArray);
    }
    
    return(
        <div class="tallrangeblock">
                <div class="labelcontainer">
                    <p class="label">Envelope</p>
                </div>
                <p className={"sliderlabel"}>
                    Attack: {envelopeSliders[0]}
                </p>
                <input type={"range"} min={0} max={100} value={envelopeSliders[0]} className={"slider"} onChange={(e) => {handleChangeEnvelopeSlider(0, e.target.value)}} />
                <p className={"sliderlabel"}>
                    Decay: {envelopeSliders[1]}
                </p>
                <input type={"range"} min={0} max={100} value={envelopeSliders[1]} className={"slider"} onChange={(e) => {handleChangeEnvelopeSlider(1, e.target.value)}} />
                <p className={"sliderlabel"}>
                    Sustain: {envelopeSliders[2]}
                </p>
                <input type={"range"} min={0} max={100} value={envelopeSliders[2]} className={"slider"} onChange={(e) => {handleChangeEnvelopeSlider(2, e.target.value)}} />
                <p className={"sliderlabel"}>
                    Release: {envelopeSliders[3]}
                </p>
                <input type={"range"} min={0} max={40} value={envelopeSliders[3]} className={"slider"} onChange={(e) => {handleChangeEnvelopeSlider(3, e.target.value)}} />
        </div> 
    );
}