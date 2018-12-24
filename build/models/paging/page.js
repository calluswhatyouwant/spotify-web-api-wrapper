"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var driver_1 = require("../../driver");
var Page = (function () {
    function Page(json, t, wrapper) {
        this.wrapper = wrapper;
        var unwrappedJson = json;
        if (wrapper)
            unwrappedJson = unwrappedJson[wrapper];
        this.t = t;
        this.href = unwrappedJson.href;
        this.items = unwrappedJson.items.map(function (json) { return new t(json); });
        this.limit = unwrappedJson.limit;
        this.next = unwrappedJson.next
            ? unwrappedJson.next.split('?')[1]
            : null;
        this.offset = unwrappedJson.offset;
        this.previous = unwrappedJson.previous
            ? unwrappedJson.previous.split('?')[1]
            : null;
        this.total = unwrappedJson.total;
    }
    Object.defineProperty(Page.prototype, "queryParams", {
        get: function () {
            var queryString = this.href.split('?')[1];
            var paramsString = queryString.split('&');
            var queryParams = {};
            for (var _i = 0, paramsString_1 = paramsString; _i < paramsString_1.length; _i++) {
                var param = paramsString_1[_i];
                var _a = param.split('='), name = _a[0], value = _a[1];
                queryParams[name] = value;
            }
            return queryParams;
        },
        enumerable: true,
        configurable: true
    });
    Page.prototype.getAxiosPageInstance = function () {
        var instance = driver_1.getAxiosSpotifyInstance();
        instance.defaults.baseURL = this.href.split('?')[0];
        return instance;
    };
    Page.prototype.hasNext = function () {
        return Boolean(this.next);
    };
    Page.prototype.hasPrevious = function () {
        return Boolean(this.previous);
    };
    Page.prototype.getNextPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasNext())
                            throw new Error('There are no more pages');
                        params = __assign({}, this.queryParams, { limit: this.limit, offset: this.offset + this.limit });
                        return [4, this.getAxiosPageInstance().get('/', { params: params })];
                    case 1:
                        response = _a.sent();
                        return [2, new Page(response.data, this.t, this.wrapper)];
                }
            });
        });
    };
    Page.prototype.getPreviousPage = function (includeRepeated) {
        if (includeRepeated === void 0) { includeRepeated = false; }
        return __awaiter(this, void 0, void 0, function () {
            var limit, offset, params, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasPrevious())
                            throw new Error('There are no more pages');
                        limit = this.limit;
                        if (this.offset < this.limit && !includeRepeated)
                            limit = this.offset;
                        offset = Math.max(this.offset - this.limit, 0);
                        params = __assign({}, this.queryParams, { limit: limit, offset: offset });
                        return [4, this.getAxiosPageInstance().get('/', {
                                params: params,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2, new Page(response.data, this.t, this.wrapper)];
                }
            });
        });
    };
    return Page;
}());
exports.default = Page;
