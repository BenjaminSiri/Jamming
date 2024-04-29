//import env from 'react-dotenv';
let accessToken = "";
const redirectURI = "https://neon-daifuku-128861.netlify.app";

console.log(process.env.REACT_APP_CLIENT_ID);

const Spotify = {
    
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if(urlAccessToken && urlExpiresIn) {
            accessToken = urlAccessToken[1];
            const expiresIn = Number(urlExpiresIn[1]);
            window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const auth = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
            window.location = auth;
        }
    },

    search(term) {
        let accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers: { Authorization: `Bearer ${accessToken}`},
        })
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            if(!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map((track) => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        })
    },

    savePlayList(name, trackURIs) {
        if(!name || !trackURIs) {
            return;
        }
        let accessToken = Spotify.getAccessToken();
        let headers = { Authorization: `Bearer ${accessToken}`};
        let userID = '';
        return fetch('https://api.spotify.com/v1/me', {headers: headers})
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            userID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({name: name})
            })
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                const newPlaylistID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${newPlaylistID}/tracks`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({uris: trackURIs})
                })
            })
        })

    }

}

export default Spotify;