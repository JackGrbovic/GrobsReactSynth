import { removeLastChar } from "./generalUtilities";

export function getParamsToUse(){
    const searchParams = getRelevantUrlSearchParams();
    const defaultParams = {
        wav1: "sine",
        wav2: "sawtooth",
        wav3: "sine",
        wav4: "sawtooth",
        osc1vol: 100,
        osc1oct: 2,
        osc2vol: 20,
        osc2oct: 2,
        mod1vol: 0,
        mod1freq: 0,
        mod2vol: 0,
        mod2freq: 0,
        attack: 0,
        decay: 0,
        sustain: 30,
        release: 0
    };
    let paramsToUse;
    if (searchParams['wav1'] !== null){
        paramsToUse = searchParams;
    }
    else{
        paramsToUse = defaultParams;
    }

    return paramsToUse;
}


export function getRelevantUrlSearchParams(){
    const urlSearch = window.location.search;
    const urlParams = new URLSearchParams(urlSearch);

    const searchParams = {
        wav1: urlParams.get('wav1'),
        wav2: urlParams.get('wav2'),
        wav3: urlParams.get('wav3'),
        wav4: urlParams.get('wav4'),
        osc1vol: urlParams.get('osc1vol'),
        osc1oct: urlParams.get('osc1oct'),
        osc2vol: urlParams.get('osc2vol'),
        osc2oct: urlParams.get('osc2oct'),
        mod1vol: urlParams.get('mod1vol'),
        mod1freq: urlParams.get('mod1freq'),
        mod2vol: urlParams.get('mod2vol'),
        mod2freq: urlParams.get('mod2freq'),
        attack: urlParams.get('attack'),
        decay: urlParams.get('decay'),
        sustain: urlParams.get('sustain'),
        release: urlParams.get('release')
    }

    return searchParams;
}


export function buildNewUrl(waveforms, generatorSliders, envelopeSliders){
    const paramsToAppend = {
        wav1: waveforms[0],
        wav2: waveforms[1],
        wav3: waveforms[2],
        wav4: waveforms[3],
        osc1vol: generatorSliders[0][0],
        osc1oct: generatorSliders[0][1],
        osc2vol: generatorSliders[1][0],
        osc2oct: generatorSliders[1][1],
        mod1vol: generatorSliders[2][0],
        mod1freq: generatorSliders[2][1],
        mod2vol: generatorSliders[3][0],
        mod2freq: generatorSliders[3][1],
        attack: envelopeSliders[0],
        decay: envelopeSliders[1],
        sustain: envelopeSliders[2],
        release: envelopeSliders[3]
    }

    let urlRoot = removeLastChar(window.location.href);
    urlRoot = removeExistingSearchParams(urlRoot);
    urlRoot += '?';

    Object.entries(paramsToAppend).map((param) => {
        urlRoot += param[0] + '=' + param[1] + '&';
    });

    urlRoot = removeLastChar(urlRoot);

    let urlToReturn = new URL(urlRoot);

    return urlToReturn;
}

function removeExistingSearchParams(href){
    let trimmedUrl = ''
    for (let char of href){
        if (char === '?') break;
        trimmedUrl += char;
    }
    return trimmedUrl;
}