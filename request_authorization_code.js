const axios = require('axios')
const querystring = require('querystring')

exports.request_authorization = async function request_authorization(client_id, client_secret) {
  var state = generateRandomString(16)
  var scope = 'user-read-private user-read-email'

  const redirect_uri = 'http://localhost:8888/callback'

  const login = "https://accounts.spotify.com/authorize?" + querystring.stringify({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: state
  })

  console.log(login)
  
  let code, state_returned   
  
  await axios.get('http://localhost:8888/callback')
    .then(response => {
      console.log("Response:", response)
      code = response.code
      state_returned = response.state
    })
    .catch(error => {
      console.log('Error in request:', error)
    })

    if (state == state_returned) {
      console.log('Equal')
    } else {
      return
    }

    const data = {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirect_uri
    }

    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
      }
    }

    function Response(access_token = undefined, token_type = undefined, scope = undefined, expires_in = undefined, refresh_token = undefined) {
        this.access_token = access_token
        this.token_type = token_type
        this.scope = scope
        this.expires_in = expires_in
        this.refresh_token = refresh_token
    }

    let response = new Response()

    await axios.post('https://accounts.spotify.com/api/token', data, config)
      .then(response => {
        response.access_token = response.access_token
      })

}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters.charAt(randomIndex)
  }

  return result
}