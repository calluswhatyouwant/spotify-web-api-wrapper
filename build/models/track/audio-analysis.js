"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AudioAnalysis = (function () {
    function AudioAnalysis(json) {
        this.bars = json.bars.map(function (bar) { return new TimeInterval(bar); });
        this.beats = json.beats.map(function (beat) { return new TimeInterval(beat); });
        this.sections = json.sections.map(function (section) { return new Section(section); });
        this.segments = json.segments.map(function (segment) { return new Segment(segment); });
        this.tatums = json.tatums.map(function (tatum) { return new TimeInterval(tatum); });
        this.track = new TrackAnalysisData(json.track);
    }
    return AudioAnalysis;
}());
var TimeInterval = (function () {
    function TimeInterval(json) {
        this.start = json.start;
        this.duration = json.duration;
        this.confidence = json.confidence;
    }
    return TimeInterval;
}());
var Section = (function () {
    function Section(json) {
        this.start = json.start;
        this.duration = json.duration;
        this.confidence = json.confidence;
        this.loudness = json.loudness;
        this.tempo = json.tempo;
        this.tempoConfidence = json.tempo_confidence;
        this.key = json.key;
        this.keyConfidence = json.key_confidence;
        this.mode = json.mode;
        this.modeConfidence = json.mode_confidence;
        this.timeSignature = json.time_signature;
        this.timeSignatureConfidence = json.time_signature_confidence;
    }
    return Section;
}());
var Segment = (function () {
    function Segment(json) {
        this.start = json.start;
        this.duration = json.duration;
        this.confidence = json.confidence;
        this.loudnessStart = json.loudness_start;
        this.loudnessMaxTime = json.loudness_max_time;
        this.loudnessMax = json.loudness_max;
        this.loudnessEnd = json.loudness_end;
        this.pitches = json.pitches;
        this.timbre = json.timbre;
    }
    return Segment;
}());
var TrackAnalysisData = (function () {
    function TrackAnalysisData(json) {
        this.duration = json.duration;
        this.sampleMd5 = json.sample_md5;
        this.offsetSeconds = json.offset_seconds;
        this.windowSeconds = json.window_seconds;
        this.analysisSampleRate = json.analysis_sample_rate;
        this.analysisChannels = json.analysis_channels;
        this.endOfFadeIn = json.end_of_fade_in;
        this.startOfFadeOut = json.start_of_fade_out;
        this.loudness = json.loudness;
        this.tempo = json.tempo;
        this.tempoConfidence = json.tempo_confidence;
        this.timeSignature = json.time_signature;
        this.timeSignatureConfidence = json.time_signature_confidence;
        this.key = json.key;
        this.keyConfidence = json.key_confidence;
        this.mode = json.mode;
        this.modeConfidence = json.mode_confidence;
        this.codeString = json.codestring;
        this.codeVersion = json.code_version;
        this.echoprintString = json.echoprintstring;
        this.echoprintVersion = json.echoprint_version;
        this.synchString = json.synchstring;
        this.synchVersion = json.synch_version;
        this.rhythmString = json.rhythmstring;
        this.rhythmVersion = json.rhythm_version;
    }
    return TrackAnalysisData;
}());
exports.default = AudioAnalysis;
