"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var Client = /** @class */ (function () {
    function Client(key) {
        this._key = key;
    }
    Client.prototype.anal = function (_a) {
        var hentai = (_a === void 0 ? {
            hentai: false
        } : _a).hentai;
        return this._fetch("anal?hentai=" + hentai);
    };
    Client.prototype.baka = function () {
        return this._fetch("baka");
    };
    Client.prototype.balloon = function (_a) {
        var text1 = _a.text1, text2 = _a.text2, text3 = _a.text3;
        return this._fetch("balloon?text1=" + text1 + "&text2=" + text2 + "&text3=" + text3);
    };
    Client.prototype.blur = function (_a) {
        var image = _a.image;
        return this._fetch("blur?image=" + image);
    };
    Client.prototype.brighten = function (_a) {
        var image = _a.image;
        return this._fetch("brighten?image=" + image);
    };
    Client.prototype.captcha = function (_a) {
        var image = _a.image;
        return this._fetch("captcha?image=" + image);
    };
    Client.prototype.catfacts = function () {
        return this._fetch("catfacts");
    };
    Client.prototype.changemymind = function (_a) {
        var text = _a.text;
        return this._fetch("captcha?text=" + text);
    };
    Client.prototype.coffee = function () {
        return this._fetch("coffee");
    };
    Client.prototype.cuddle = function () {
        return this._fetch("cuddle");
    };
    Client.prototype.deepfry = function (_a) {
        var image = _a.image;
        return this._fetch("deepfry?image=" + image);
    };
    Client.prototype.dogfacts = function () {
        return this._fetch("dogfacts");
    };
    Client.prototype.eightball = function () {
        return this._fetch("eightball");
    };
    Client.prototype.facts = function (_a) {
        var nsfw = _a.nsfw;
        return this._fetch("facts?nsfw=" + nsfw);
    };
    Client.prototype.fade = function (_a) {
        var image = _a.image;
        return this._fetch("fade?image=" + image);
    };
    Client.prototype.feed = function () {
        return this._fetch("feed");
    };
    Client.prototype.food = function () {
        return this._fetch("food");
    };
    Client.prototype.fortune = function () {
        return this._fetch("fortune");
    };
    Client.prototype.fourk = function () {
        return this._fetch("fourk");
    };
    Client.prototype.gah = function () {
        return this._fetch("gah");
    };
    Client.prototype.gonewild = function () {
        return this._fetch("gonewild");
    };
    Client.prototype.greyscale = function (_a) {
        var image = _a.image;
        return this._fetch("greyscale?image=" + image);
    };
    Client.prototype.hentai = function () {
        return this._fetch("hentai");
    };
    Client.prototype.hug = function () {
        return this._fetch("hug");
    };
    Client.prototype.invert = function (_a) {
        var image = _a.image;
        return this._fetch("invert?image=" + image);
    };
    Client.prototype.joke = function (_a) {
        var nsfw = (_a === void 0 ? {
            nsfw: true
        } : _a).nsfw;
        return this._fetch("joke?nsfw=" + nsfw);
    };
    Client.prototype.lyrics = function (_a) {
        var song = _a.song;
        return this._fetch("lyrics?song=" + song);
    };
    Client.prototype.pat = function () {
        return this._fetch("pat");
    };
    Client.prototype.phubcomment = function (_a) {
        var image = _a.image, username = _a.username, text = _a.text;
        return this._fetch("phubcomment?image=" + image + "&username=" + username + "&text=" + text);
    };
    Client.prototype.pixelate = function (_a) {
        var image = _a.image;
        return this._fetch("pixelate?image=" + image);
    };
    Client.prototype.porngif = function () {
        return this._fetch("porngif");
    };
    Client.prototype.pussy = function () {
        return this._fetch("pussy");
    };
    Client.prototype.quotes = function (_a) {
        var nsfw = (_a === void 0 ? {
            nsfw: true
        } : _a).nsfw;
        return this._fetch("quotes?nsfw=" + nsfw);
    };
    Client.prototype.reddit = function (_a) {
        var subreddit = _a.subreddit, nsfw = _a.nsfw;
        return this._fetch("reddit?subreddit=" + subreddit + "&nsfw=" + nsfw);
    };
    Client.prototype.sepia = function (_a) {
        var image = _a.image;
        return this._fetch("sepia?image=" + image);
    };
    Client.prototype.ship = function (_a) {
        var image1 = _a.image1, image2 = _a.image2;
        return this._fetch("ship?image1=" + image1 + "&image2=" + image2);
    };
    Client.prototype.slap = function () {
        return this._fetch("slap");
    };
    Client.prototype.smug = function () {
        return this._fetch("smug");
    };
    Client.prototype.thigh = function (_a) {
        var hentai = (_a === void 0 ? {
            hentai: false
        } : _a).hentai;
        return this._fetch("thigh?hentai=" + hentai);
    };
    Client.prototype.trigger = function (_a) {
        var image = _a.image;
        return this._fetch("trigger?image=" + image);
    };
    Client.prototype.tweet = function (_a) {
        var image = _a.image, username = _a.username, text = _a.text;
        return this._fetch("tweet?image=" + image + "&username=" + username + "&text=" + text);
    };
    Client.prototype.weather = function (_a) {
        var place = _a.place;
        return this._fetch("weather?place=" + place);
    };
    Client.prototype.winniethepooh = function (_a) {
        var text1 = _a.text1, text2 = _a.text2;
        return this._fetch("winniethepooh?text1=" + text1 + "&text2=" + text2);
    };
    Client.prototype.wouldyourather = function (_a) {
        var nsfw = (_a === void 0 ? {
            nsfw: true
        } : _a).nsfw;
        return this._fetch("wouldyourather?nsfw=" + nsfw);
    };
    Client.prototype._fetch = function (endpoint) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default.get("https://api.zyrouge.gq/api/" + endpoint, {
                headers: {
                    'Authorization': _this._key
                }
            })
                .then(function (res) { return resolve(res.data); })
                .catch(function (error) { return reject(error); });
        });
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=Client.js.map