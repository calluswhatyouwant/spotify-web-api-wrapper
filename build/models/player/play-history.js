"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __importDefault(require("./context"));
var track_1 = __importDefault(require("../track/track"));
var PlayHistory = (function () {
    function PlayHistory(json) {
        this.track = new track_1.default(json.track);
        this.playedAt = json.played_at;
        this.context = json.context ? new context_1.default(json.context) : null;
    }
    return PlayHistory;
}());
exports.default = PlayHistory;
