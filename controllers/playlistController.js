const express = require('express')

const playlist = express.Router()

const songController = require('./songController')

const {
  getSongsFromPlaylist,
  deletePlaylist,
  getAllPlaylists,
} = require('../queries/playlists')

playlist.use('/:songId/songs', songController)

playlist.get('/', async (req, res) => {
  const allPlaylists = await getAllPlaylists()
  if (allPlaylists[0]) {
    console.log('numPlaylists', allPlaylists.length)
    res.status(200).json(allPlaylists)
  } else {
    res.status(500).json({ error: 'server error' })
  }
})

//get all songs in a playlist by name
// you could also use the playlist_id as a parameter `/:playlist_id/songs

playlist.get('/songs', async (req, res) => {
  const { name } = req.query
  const songsFromPlaylist = await getSongsFromPlaylist(name)

  if (songsFromPlaylist[0]) {
    res.status(200).json(songsFromPlaylist)
  } else {
    res.status(500).json({ error: 'server error' })
  }
})

playlist.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedPlaylist = await deletePlaylist(id)
    res.status(200).json(deletedPlaylist)
  } catch (error) {
    res.status(404).json({ error: 'Id not found' })
  }
})

module.exports = playlist
