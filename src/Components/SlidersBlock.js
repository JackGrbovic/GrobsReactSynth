import Envelope from "./Envelope";
import Generator from "./Generator";

export default function SlidersBlock({ generators, setGenerators, envelopeSliders, setEnvelopeSliders, waveforms, setWaveforms}) {
    return (
      <div className="containingdiv" style={{ marginTop: '50px' }}>
        {generators.map((generator, index) => (
          <Generator key={index} {...generator} waveforms={waveforms} setWaveforms={setWaveforms}/>
        ))}
        <Envelope envelopeSliders={envelopeSliders} setEnvelopeSliders={setEnvelopeSliders}/>
      </div>
    );
}