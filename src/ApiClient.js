const URL = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=doom+metal&api_key=acccd0415ef2ea5f2906e513a2391783&format=json';

function getArtist(){
    return fetch(URL)
        .then( response => response.json() )
        .then( data => data.topartists.artist)
        .then(artists => artists.map(artist => ({
            name: artist.name,
            image: artist.image[3]['#text'],
            likes: 200,
            comments: 140
        } )))            
}

export { getArtist }