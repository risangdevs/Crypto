export const BASE_URL = (path = '') => `https://api.coincap.io/v2/${path}`
export const WS_URL_PRICES = (id = 'ALL') => `wss://ws.coincap.io/prices?assets=${id}`