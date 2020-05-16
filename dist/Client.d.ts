declare class Client {
    private _key;
    constructor(key: string);
    anal({ hentai }?: {
        hentai: boolean;
    }): Promise<any>;
    baka(): Promise<any>;
    balloon({ text1, text2, text3 }: {
        text1: string;
        text2: string;
        text3: string;
    }): Promise<any>;
    blur({ image }: {
        image: string;
    }): Promise<any>;
    brighten({ image }: {
        image: string;
    }): Promise<any>;
    captcha({ image }: {
        image: string;
    }): Promise<any>;
    catfacts(): Promise<any>;
    changemymind({ text }: {
        text: string;
    }): Promise<any>;
    coffee(): Promise<any>;
    cuddle(): Promise<any>;
    deepfry({ image }: {
        image: string;
    }): Promise<any>;
    dogfacts(): Promise<any>;
    eightball(): Promise<any>;
    facts({ nsfw }: {
        nsfw: boolean;
    }): Promise<any>;
    fade({ image }: {
        image: string;
    }): Promise<any>;
    feed(): Promise<any>;
    food(): Promise<any>;
    fortune(): Promise<any>;
    fourk(): Promise<any>;
    gah(): Promise<any>;
    gonewild(): Promise<any>;
    greyscale({ image }: {
        image: string;
    }): Promise<any>;
    hentai(): Promise<any>;
    hug(): Promise<any>;
    invert({ image }: {
        image: string;
    }): Promise<any>;
    joke({ nsfw }?: {
        nsfw: boolean;
    }): Promise<any>;
    lyrics({ song }: {
        song: string;
    }): Promise<any>;
    pat(): Promise<any>;
    phubcomment({ image, username, text }: {
        image: string;
        username: string;
        text: string;
    }): Promise<any>;
    pixelate({ image }: {
        image: string;
    }): Promise<any>;
    porngif(): Promise<any>;
    pussy(): Promise<any>;
    quotes({ nsfw }?: {
        nsfw: boolean;
    }): Promise<any>;
    reddit({ subreddit, nsfw }: {
        subreddit: string;
        nsfw: boolean;
    }): Promise<any>;
    sepia({ image }: {
        image: string;
    }): Promise<any>;
    ship({ image1, image2 }: {
        image1: string;
        image2: string;
    }): Promise<any>;
    slap(): Promise<any>;
    smug(): Promise<any>;
    thigh({ hentai }?: {
        hentai: boolean;
    }): Promise<any>;
    trigger({ image }: {
        image: string;
    }): Promise<any>;
    tweet({ image, username, text }: {
        image: string;
        username: string;
        text: string;
    }): Promise<any>;
    weather({ place }: {
        place: string;
    }): Promise<any>;
    winniethepooh({ text1, text2 }: {
        text1: string;
        text2: string;
    }): Promise<any>;
    wouldyourather({ nsfw }?: {
        nsfw: boolean;
    }): Promise<any>;
    private _fetch;
}
export default Client;
