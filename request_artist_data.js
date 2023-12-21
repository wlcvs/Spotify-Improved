const axios = require('axios')

exports.artist_data = async function(spotify_id, token) {
    
    const url = `https://api.spotify.com/v1/artists/${spotify_id}`

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    await axios.get(url, config)
        .then(response => {
            console.log("Response:", response)
        })
        .catch(error => {
            console.log('Error in request:', error)
        })
}
