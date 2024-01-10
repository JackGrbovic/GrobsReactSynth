export default function Dropdown({ waveforms, setWaveforms, index }) {

    function capitaliseFirstLetter() {
      return waveforms[index].charAt(0).toUpperCase() + waveforms[index].slice(1);
    }
  
    function handleClick(value) {
      let newArray = [...waveforms];
      newArray[index] = value;
      setWaveforms(newArray);
    }

    return (
      <div className="dropdown">
        <button className="dropbtn">{capitaliseFirstLetter(waveforms[index])}</button>
        <div className="dropdown-content">
          <a onClick={() => {handleClick("sine")}}>Sine</a>
          <a onClick={() => {handleClick("square")}}>Square</a>
          <a onClick={() => {handleClick("triangle")}}>Triangle</a>
          <a onClick={() => {handleClick("sawtooth")}}>Sawtooth</a>
        </div>
      </div>
    );
  }