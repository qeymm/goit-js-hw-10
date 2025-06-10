const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_NwLCbCfcxcQoI7zaA7WVppW6wM9DTiGi4seJShW88QRZZj9QqTHAP05f25XdyBui";

export function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`, {
        headers: {
            api_key: API_KEY,
        },
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.status);
        } else {
            return res.json()
        }
    });
}



export function fetchCatByBreeds(breedId) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`
        
    ).then(res => {
        if (!res.ok) {
            throw new Error(res.status)
        } else {
            return res.json()
        }
    })
}