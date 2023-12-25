const request_token = require('./request_token')
const request_artist_data = require('./request_artist_data')
const request_authorization = require('./request_authorization_code')

const express = require('express')

require('dotenv').config()

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const port = process.env.PORT

const app = express()

app.get('/', (req, res) => {
  res.send('Não tem nada para você aqui')
})

app.get('/callback', (req, res) => {})

let artist_id = '4Z8W4fKeB5YxbusRsdQVPb'

async function main() {
    const token = await request_token.token(client_id, client_secret)
    // console.log(token)
    // await request_artist_data.artist_data(artist_id, token)
    await request_authorization.request_authorization(client_id)
}

main()

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})