const axios = require('axios')
const querystring = require('querystring')

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters.charAt(randomIndex)
  }

  return result

}

async function request_authorization(client_id) {
  var state = generateRandomString(16)
  var scope = 'user-read-private user-read-email'
  const login = "https://accounts.spotify.com/authorize?" + querystring.stringify({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: state
  })
}
