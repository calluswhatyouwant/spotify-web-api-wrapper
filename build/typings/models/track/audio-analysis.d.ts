declare class AudioAnalysis {
    bars: TimeInterval[];
    beats: TimeInterval[];
    sections: Section[];
    segments: Segment[];
    tatums: TimeInterval[];
    track: TrackAnalysisData;
    constructor(json: any);
}
declare class TimeInterval {
    start: number;
    duration: number;
    confidence: number;
    constructor(json: any);
}
declare class Section {
    start: number;
    duration: number;
    confidence: number;
    loudness: number;
    tempo: number;
    tempoConfidence: number;
    key: number;
    keyConfidence: number;
    mode: number;
    modeConfidence: number;
    timeSignature: number;
    timeSignatureConfidence: number;
    constructor(json: any);
}
declare class Segment {
    start: number;
    duration: number;
    confidence: number;
    loudnessStart: number;
    loudnessMaxTime: number;
    loudnessMax: number;
    loudnessEnd: number;
    pitches: number[];
    timbre: number[];
    constructor(json: any);
}
declare class TrackAnalysisData {
    duration: number;
    sampleMd5: string;
    offsetSeconds: number;
    windowSeconds: number;
    analysisSampleRate: number;
    analysisChannels: number;
    endOfFadeIn: number;
    startOfFadeOut: number;
    loudness: number;
    tempo: number;
    tempoConfidence: number;
    timeSignature: number;
    timeSignatureConfidence: number;
    key: number;
    keyConfidence: number;
    mode: number;
    modeConfidence: number;
    codeString: string;
    codeVersion: number;
    echoprintString: string;
    echoprintVersion: number;
    synchString: string;
    synchVersion: number;
    rhythmString: string;
    rhythmVersion: number;
    constructor(json: any);
}
export default AudioAnalysis;
