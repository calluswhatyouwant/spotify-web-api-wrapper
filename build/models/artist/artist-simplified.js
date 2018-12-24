"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArtistSimplified = (function () {
    function ArtistSimplified(json) {
        this.externalUrls = json.external_urls;
        this.href = json.href;
        this.id = json.id;
        this.name = json.name;
        this.type = json.type;
        this.uri = json.uri;
    }
    return ArtistSimplified;
}());
exports.default = ArtistSimplified;
