"use strict";
exports.__esModule = true;
var dist_1 = require("../dist");
var ZyroClient = new dist_1["default"].Client("token");
// xD
setTimeout(function () {
    ZyroClient.anal().then(console.log);
    setTimeout(function () {
        ZyroClient.baka().then(console.log);
        setTimeout(function () {
            ZyroClient.balloon({
                text1: "wut",
                text2: "lel",
                text3: "ye"
            }).then(console.log);
            setTimeout(function () {
                ZyroClient.reddit({
                    subreddit: 'memes',
                    nsfw: false
                }).then(console.log);
                setTimeout(function () {
                    ZyroClient.slap().then(console.log);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);
