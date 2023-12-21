const axios = require('axios')

exports.token = async function(client_id, client_secret) {

    let token = ''

    const url_to_get_token = 'https://accounts.spotify.com/api/token'

    const data_to_get_token = {
        grant_type: 'client_credentials',    
        client_id: client_id,
        client_secret: client_secret
    }

    const config_to_get_token = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    await axios.post(url_to_get_token, data_to_get_token, config_to_get_token)
        .then(response => {
            // console.log("Response:", response.data)
            token = response.data.access_token
        })
        .catch(error => {
            console.log('Error in request:', error)
        })
    
    return token
}