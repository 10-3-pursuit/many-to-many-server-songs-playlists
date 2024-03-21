const express = require('express')

const song = express.Router({ mergeParams: true })
const {
  getAllSongs,
  getAllSongPlaylists,
  deleteSong,
} = require('../queries/songs')

song.get('/', async (_req, res) => {
  const allSongs = await getAllSongs()

  if (allSongs[0]) {
    console.log('numSongs', allSongs.length)
    res.status(200).json(allSongs)
  } else {
    res.status(500).json({ error: 'server error' })
  }
})

song.get('/:id/playlists', async (req, res) => {
  const { id } = req.params

  const songPlaylists = await getAllSongPlaylists(id)

  if (songPlaylists[0]) {
    res.status(200).json(songPlaylists)
  } else {
    res.status(500).json({ error: 'server error' })
  }
})

song.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedSong = await deleteSong(id)
    res.status(200).json(deletedSong)
  } catch (error) {
    res.status(404).json({ error: 'Id not found' })
  }
})

module.exports = song
