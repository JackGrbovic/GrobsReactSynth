import { buildNewUrl } from "../utilities/urlHandling"

export default function UrlBlock({waveforms, generatorSliders, envelopeSliders}){
    const url = buildNewUrl(waveforms, generatorSliders, envelopeSliders);

    function copyUrl(){
        navigator.clipboard.writeText(url.href)
    }

    const infoBarString = 'By copying this URL, you can save the state of your synth and load it again later.';

    return(
        <div className='urlbarcontainer'>
            <div className='copylinkbutton' onClick={copyUrl}>
                <p>Copy URL</p>
            </div>
            <div class="infobar">
                <p className="urlbartext">{infoBarString}</p>
            </div>
        </div>
    )
}