const request_token = require('./request_token')
require('dotenv').config()

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET

const token = request_token.token(client_id, client_secret)

console.log(token)