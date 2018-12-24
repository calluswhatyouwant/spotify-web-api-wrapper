"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __importDefault(require("./context"));
var track_1 = __importDefault(require("../track/track"));
var CurrentlyPlaying = (function () {
    function CurrentlyPlaying(json) {
        this.context = json.context ? new context_1.default(json.context) : null;
        this.currentlyPlayingType = json.currently_playing_type;
        this.isPlaying = json.is_playing;
        this.item = json.item ? new track_1.default(json.item) : null;
        this.progressMs = json.progress_ms;
        this.timestamp = json.timestamp;
    }
    return CurrentlyPlaying;
}());
exports.default = CurrentlyPlaying;
