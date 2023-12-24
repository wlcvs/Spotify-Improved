const axios = require('axios')
const express = require('express')
const querystring = require('querystring')

exports.request_authorization = async function request_authorization(client_id, port) {
  const app = express()

  var state = generateRandomString(16)
  var scope = 'user-read-private user-read-email'
  const login = "https://accounts.spotify.com/authorize?" + querystring.stringify({
    response_type: 'code',
    client_id: client_id,
    scope: scope,
    redirect_uri: redirect_uri,
    state: state
  })
  
  
  app.get('/', (req, res) => {
    res.send('Não tem nada para você aqui')
  })
  
  let code 
  let state
  
  
  app.get('/callback', (req, res) => {})
  
  await axios.get('http://localhost:8888/callback')
    .then(reponse => {
      console.log("Response:", response)
      code = response.code
      state = response.state
    })
    .catch(error => {
      console.log('Error in request:', error)
    })

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
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