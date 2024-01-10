import Generator from './Generator.js';
import Envelope from './Envelope.js';
import UrlBlock from './UrlBlock.js';

export default function ConfigurationBlock({waveforms, setWaveforms, generatorSliders, setGeneratorSliders, envelopeSliders, setEnvelopeSliders}) {
    return (
      <div className="flexcontainer">
        <div className="configurationblockcontainer" style={{ marginTop: '50px' }}>
            <div className="generatorscontainer">
              <>
                  <Generator index={0} generatorType={"oscillator"} number={1} sliders={generatorSliders} setSliders={setGeneratorSliders} waveforms={waveforms} setWaveforms={setWaveforms} />
                  <Generator index={1} generatorType={"oscillator"} number={2} sliders={generatorSliders} setSliders={setGeneratorSliders} waveforms={waveforms} setWaveforms={setWaveforms} />
                  <Generator index={2} generatorType={"modulator"} number={1} sliders={generatorSliders} setSliders={setGeneratorSliders} waveforms={waveforms} setWaveforms={setWaveforms} />
                  <Generator index={3} generatorType={"modulator"} number={2} sliders={generatorSliders} setSliders={setGeneratorSliders} waveforms={waveforms} setWaveforms={setWaveforms} />
              </>
            </div>
            <Envelope envelopeSliders={envelopeSliders} setEnvelopeSliders={setEnvelopeSliders}/>
            <UrlBlock waveforms={waveforms} generatorSliders={generatorSliders} envelopeSliders={envelopeSliders}/>
          </div>
      </div>
    );
}