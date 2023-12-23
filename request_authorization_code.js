const axios = require('axios')
const querystring = require('querystring')

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
