// https://developer.spotify.com/documentation/web-playback-sdk/tutorials/getting-started


export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";



// https://developer.spotify.com/dashboard/d5bf8b3ab2d64889a69e82bf5452210a/settings
const clientId = "d5bf8b3ab2d64889a69e82bf5452210a";

// something called to access the API of Spotify to play 
const scopes = [
    "user-read-recently-played",
    "user-read-currently-playing",
    "user-top-read",
    "user-modify-playback-state"
];

// it's complete about the URL we are building; it shows that the original URL to access anyone but
// in this hash code will change that into some other code for people can't able to access my 
// super-secret key 
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            // it's access token == my secret key & name = ramesh 
            var parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial;
        }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
