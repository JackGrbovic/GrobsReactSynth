import Dropdown from './Dropdown';

export default function Generator({
    index,
    generatorType,
    number,
    sliders,
    setSliders,
    waveforms,
    setWaveforms
  }) {
    
    function handleChangeSlider(firstIndex, secondIndex, value) {
      let newSliders = [...sliders];
      newSliders[firstIndex][secondIndex] = parseInt(value);
      setSliders(newSliders);
    }

    return (
      <div className="rangeblock">
        <div className="labelcontainer">
          <p className="label">
            {generatorType === "oscillator" ? "Oscillator" : "Modulator"} {number}
          </p>
        </div>
          <p className={"sliderlabel"}>
            Volume: {sliders[index][0]}
          </p>
          <input
            type={"range"}
            min={0}
            max={generatorType === "oscillator" ? 200 : 400}
            value={sliders[index][0]}
            className={"slider"}
            onChange={(e) => {handleChangeSlider(index, 0, e.target.value)}}
          />
          <p className={"sliderlabel"}>
            Octave: {sliders[index][1]}
          </p>
          <input
            type={"range"}
            min={0}
            max={generatorType === "oscillator" ? 6 : 400}
            value={sliders[index][1]}
            className={"slider"}
            onChange={(e) => {handleChangeSlider(index, 1, e.target.value)}}
          />
        <Dropdown waveforms={waveforms} setWaveforms={setWaveforms} index={index} />
      </div>
    );
  }