import ZyroAPI from "../dist";

const ZyroClient = new ZyroAPI.Client("token");

// xD
setTimeout(() => {
    ZyroClient.anal().then(console.log);
    setTimeout(() => {
        ZyroClient.baka().then(console.log);
        setTimeout(() => {
            ZyroClient.balloon({
                text1: "wut",
                text2: "lel",
                text3: "ye"
            }).then(console.log);
            setTimeout(() => {
                ZyroClient.reddit({
                    subreddit: 'memes',
                    nsfw: false
                }).then(console.log);
                setTimeout(() => {
                    ZyroClient.slap().then(console.log);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);