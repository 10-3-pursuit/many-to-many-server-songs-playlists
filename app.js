const express = require('express')
const cors = require('cors')
const playlistController = require('./controllers/playlistController')
const songController = require('./controllers/songController')
const app = express()

app.use(cors())
app.use(express.json())

// CONTROLLERS
app.use('/api/playlists', playlistController)
app.use('/api/songs', songController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Bookmarks App')
})

// 404 PAGE
app.get('*', (req, res) => {
  res.json({ error: 'Page not found' })
})
// EXPORT
module.exports = app
