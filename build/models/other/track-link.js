"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TrackLink = (function () {
    function TrackLink(json) {
        this.externalUrls = json.external_urls;
        this.href = json.href;
        this.id = json.id;
        this.type = json.type;
        this.uri = json.uri;
    }
    return TrackLink;
}());
exports.default = TrackLink;
