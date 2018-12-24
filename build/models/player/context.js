"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context = (function () {
    function Context(json) {
        this.type = json.type;
        this.href = json.href;
        this.externalUrls = json.external_urls;
        this.uri = json.uri;
    }
    return Context;
}());
exports.default = Context;
