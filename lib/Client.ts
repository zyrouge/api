import axios from "axios";

class Client {
    
    private _key: string;

    constructor(key: string) {
        this._key = key;
    }

    anal({ hentai }: {
        hentai: boolean;
    } = {
        hentai: false
    }) {
        return this._fetch(`anal?hentai=${hentai}`);
    }

    baka() {
        return this._fetch(`baka`);
    }

    balloon({ text1, text2, text3 }: {
        text1: string;
        text2: string;
        text3: string;
    }) {
        return this._fetch(`balloon?text1=${text1}&text2=${text2}&text3=${text3}`);
    }

    blur({ image }: {
        image: string;
    }) {
        return this._fetch(`blur?image=${image}`);
    }

    brighten({ image }: {
        image: string;
    }) {
        return this._fetch(`brighten?image=${image}`);
    }

    captcha({ image }: {
        image: string;
    }) {
        return this._fetch(`captcha?image=${image}`);
    }

    catfacts() {
        return this._fetch(`catfacts`);
    }

    changemymind({ text }: {
        text: string;
    }) {
        return this._fetch(`captcha?text=${text}`);
    }

    coffee() {
        return this._fetch(`coffee`);
    }

    cuddle() {
        return this._fetch(`cuddle`);
    }

    deepfry({ image }: {
        image: string;
    }) {
        return this._fetch(`deepfry?image=${image}`);
    }

    dogfacts() {
        return this._fetch(`dogfacts`);
    }

    eightball() {
        return this._fetch(`eightball`);
    }

    facts({ nsfw }: {
        nsfw: boolean;
    }) {
        return this._fetch(`facts?nsfw=${nsfw}`);
    }

    fade({ image }: {
        image: string;
    }) {
        return this._fetch(`fade?image=${image}`);
    }

    feed() {
        return this._fetch(`feed`);
    }

    food() {
        return this._fetch(`food`);
    }

    fortune() {
        return this._fetch(`fortune`);
    }

    fourk() {
        return this._fetch(`fourk`);
    }

    gah() {
        return this._fetch(`gah`);
    }

    gonewild() {
        return this._fetch(`gonewild`);
    }

    greyscale({ image }: {
        image: string;
    }) {
        return this._fetch(`greyscale?image=${image}`);
    }

    hentai() {
        return this._fetch(`hentai`);
    }

    hug() {
        return this._fetch(`hug`);
    }

    invert({ image }: {
        image: string;
    }) {
        return this._fetch(`invert?image=${image}`);
    }

    joke({ nsfw }: {
        nsfw: boolean;
    } = {
        nsfw: true
    }) {
        return this._fetch(`joke?nsfw=${nsfw}`);
    }

    lyrics({ song }: {
        song: string;
    }) {
        return this._fetch(`lyrics?song=${song}`);
    }

    pat() {
        return this._fetch(`pat`);
    }

    phubcomment({ image, username, text }: {
        image: string;
        username: string;
        text: string;
    }) {
        return this._fetch(`phubcomment?image=${image}&username=${username}&text=${text}`);
    }

    pixelate({ image }: {
        image: string;
    }) {
        return this._fetch(`pixelate?image=${image}`);
    }

    porngif() {
        return this._fetch(`porngif`);
    }

    pussy() {
        return this._fetch(`pussy`);
    }

    quotes({ nsfw }: {
        nsfw: boolean;
    } = {
        nsfw: true
    }) {
        return this._fetch(`quotes?nsfw=${nsfw}`);
    }

    reddit({ subreddit, nsfw }: {
        subreddit: string;
        nsfw: boolean;
    }) {
        return this._fetch(`reddit?subreddit=${subreddit}&nsfw=${nsfw}`);
    }

    sepia({ image }: {
        image: string;
    }) {
        return this._fetch(`sepia?image=${image}`);
    }

    ship({ image1, image2 }: {
        image1: string;
        image2: string;
    }) {
        return this._fetch(`ship?image1=${image1}&image2=${image2}`);
    }

    slap() {
        return this._fetch(`slap`);
    }

    smug() {
        return this._fetch(`smug`);
    }

    thigh({ hentai }: {
        hentai: boolean;
    } = {
        hentai: false
    }) {
        return this._fetch(`thigh?hentai=${hentai}`);
    }

    trigger({ image }: {
        image: string;
    }) {
        return this._fetch(`trigger?image=${image}`);
    }

    tweet({ image, username, text }: {
        image: string;
        username: string;
        text: string;
    }) {
        return this._fetch(`tweet?image=${image}&username=${username}&text=${text}`);
    }

    weather({ place }: {
        place: string;
    }) {
        return this._fetch(`weather?place=${place}`);
    }

    winniethepooh({ text1, text2 }: {
        text1: string;
        text2: string;
    }) {
        return this._fetch(`winniethepooh?text1=${text1}&text2=${text2}`);
    }

    wouldyourather({ nsfw }: {
        nsfw: boolean;
    } = {
        nsfw: true
    }) {
        return this._fetch(`wouldyourather?nsfw=${nsfw}`);
    }

    private _fetch(endpoint: string): Promise<any> {
        return new Promise((resolve, reject) => {
            axios.get(`https://api.zyrouge.gq/api/${endpoint}`, {
                headers: {
                    'Authorization': this._key
                }
            })
            .then(res => resolve(res.data))
            .catch(error => reject(error));
        });
    }
    
}

export default Client;