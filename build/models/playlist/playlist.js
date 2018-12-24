"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var followers_1 = __importDefault(require("../common/followers"));
var image_1 = __importDefault(require("../common/image"));
var page_1 = __importDefault(require("../paging/page"));
var playlist_track_1 = __importDefault(require("./playlist-track"));
var user_public_1 = __importDefault(require("../user/user-public"));
var Playlist = (function () {
    function Playlist(json) {
        this.collaborative = json.collaborative;
        this.description = json.description;
        this.externalUrls = json.external_urls;
        this.followers = new followers_1.default(json.followers);
        this.href = json.href;
        this.id = json.id;
        this.images = json.images.map(function (imageJson) { return new image_1.default(imageJson); });
        this.name = json.name;
        this.owner = new user_public_1.default(json.owner);
        this.public = json.public;
        this.snapshotId = json.snapshot_id;
        this.tracks = new page_1.default(json.tracks, playlist_track_1.default);
        this.type = json.type;
        this.uri = json.uri;
    }
    return Playlist;
}());
exports.default = Playlist;
