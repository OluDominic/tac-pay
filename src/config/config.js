const isLive = false;
const api = isLive ? "ff" : "http://127.0.0.1:3001";

export const APPCONFIG = {
    isLive,
    appapi:api
}