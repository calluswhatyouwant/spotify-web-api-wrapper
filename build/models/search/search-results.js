"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = __importDefault(require("../paging/page"));
var album_simplified_1 = __importDefault(require("../album/album-simplified"));
var artist_1 = __importDefault(require("../artist/artist"));
var playlist_simplified_1 = __importDefault(require("../playlist/playlist-simplified"));
var track_1 = __importDefault(require("../track/track"));
var SearchResults = (function () {
    function SearchResults(json) {
        if (json.albums) {
            this.albums = new page_1.default(json, album_simplified_1.default, 'albums');
        }
        if (json.artists) {
            this.artists = new page_1.default(json, artist_1.default, 'artists');
        }
        if (json.playlists) {
            this.playlists = new page_1.default(json, playlist_simplified_1.default, 'playlists');
        }
        if (json.tracks) {
            this.tracks = new page_1.default(json, track_1.default, 'tracks');
        }
    }
    return SearchResults;
}());
exports.default = SearchResults;
