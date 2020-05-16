# Zyrouge API
An API wrapper for https://api.zyrouge.gq

## Requirements
* An API Key [Click here](https://api.zyrouge.gq/dashboard)

## [Visit this for Endpoints](https://api.zyrouge.gq/documentation)

## How to Use?
#### JavaScript
```js
const ZyroAPI = require("zyrouge-api");
const ZyroClient = new ZyroAPI.Client("token");
```

#### Typescript
```ts
import ZyroAPI from "zyrouge-api";
const ZyroClient = new ZyroAPI.Client("token");
```

## Common Usage
```js
ZyroClient[`endpoint`](options)
.then(res => {
    console.log(res);
})
.catch(e => console.error(e));
```

## Need Help?

Open a [Issue](https://github.com/zyrouge/api/issues) or join our [Discord Server](https://zyrouge.gq/discord) for help!

[**Zyrouge Development**](https://zyrouge.gq/discord) | [**ZYROUGE**](https://zyrouge.gq) | [**NPM**](https://www.npmjs.com/package/zyrouge-api) | [**Endpoints**](https://api.zyrouge.gq/documentation)


## Examples
```js
const ZyroAPI = require("zyrouge-api");
const ZyroClient = new ZyroAPI.Client("token");

ZyroClient.anal().then(console.log);
ZyroClient.baka().then(console.log);
ZyroClient.balloon().then(console.log);
ZyroClient.blur().then(console.log);
ZyroClient.brighten().then(console.log);
ZyroClient.captcha().then(console.log);
ZyroClient.catfacts().then(console.log);
ZyroClient.changemymind().then(console.log);
ZyroClient.coffee().then(console.log);
ZyroClient.cuddle().then(console.log);
ZyroClient.deepfry().then(console.log);
ZyroClient.dogfacts().then(console.log);
ZyroClient.eightball().then(console.log);
ZyroClient.facts().then(console.log);
ZyroClient.fade().then(console.log);
ZyroClient.feed().then(console.log);
ZyroClient.food().then(console.log);
ZyroClient.fortune().then(console.log);
ZyroClient.fourk().then(console.log);
ZyroClient.gah().then(console.log);
ZyroClient.gonewild().then(console.log);
ZyroClient.greyscale().then(console.log);
ZyroClient.hentai().then(console.log);
ZyroClient.hug().then(console.log);
ZyroClient.invert().then(console.log);
ZyroClient.joke().then(console.log);
ZyroClient.lyrics().then(console.log);
ZyroClient.pat().then(console.log);
ZyroClient.phubcomment().then(console.log);
ZyroClient.pixelate().then(console.log);
ZyroClient.porngif().then(console.log);
ZyroClient.pussy().then(console.log);
ZyroClient.quotes().then(console.log);
ZyroClient.reddit().then(console.log);
ZyroClient.roasts().then(console.log);
ZyroClient.sepia().then(console.log);
ZyroClient.ship().then(console.log);
ZyroClient.slap().then(console.log);
ZyroClient.smug().then(console.log);
ZyroClient.thigh().then(console.log);
ZyroClient.trigger().then(console.log);
ZyroClient.tweet().then(console.log);
ZyroClient.weather().then(console.log);
ZyroClient.winniethepooh().then(console.log);
ZyroClient.wouldyourather().then(console.log);
```