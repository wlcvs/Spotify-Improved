const request_token = require('./request_token')
const request_artist_data = require('./request_artist_data')
require('dotenv').config()

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET

let artist_id = '4Z8W4fKeB5YxbusRsdQVPb'

async function main() {
    const token = await request_token.token(client_id, client_secret)
    // console.log(token)
    await request_artist_data.artist_data(artist_id, token)
}

main()
