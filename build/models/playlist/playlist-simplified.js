"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("../common/image"));
var user_public_1 = __importDefault(require("../user/user-public"));
var PlaylistSimplified = (function () {
    function PlaylistSimplified(json) {
        this.collaborative = json.collaborative;
        this.externalUrls = json.external_urls;
        this.href = json.href;
        this.id = json.id;
        this.images = json.images.map(function (imageJson) { return new image_1.default(imageJson); });
        this.name = json.name;
        this.owner = new user_public_1.default(json.owner);
        this.public = json.public;
        this.snapshotId = json.snapshot_id;
        this.tracks = json.tracks;
        this.type = json.type;
        this.uri = json.uri;
    }
    Object.defineProperty(PlaylistSimplified.prototype, "totalTracks", {
        get: function () {
            return this.tracks.total;
        },
        enumerable: true,
        configurable: true
    });
    return PlaylistSimplified;
}());
exports.default = PlaylistSimplified;
