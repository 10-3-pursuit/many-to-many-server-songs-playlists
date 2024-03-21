const db = require('../db/dbconfig.js')

const getAllSongs = async () => {
  try {
    const allSongs = await db.any('SELECT * FROM songs')
    return allSongs
  } catch (error) {
    console.log('db error', error)
    return error
  }
}

const getAllSongPlaylists = async (id) => {
  try {
    const songPlaylists = await db.any(
      'SELECT playlists.playlist_id, playlists.name AS name FROM playlistSongs JOIN playlists ON playlistSongs.playlist_id = playlists.playlist_id JOIN songs ON playlistSongs.song_id = songs.song_id WHERE songs.song_id = $1',
      id
    )
    return songPlaylists
  } catch (error) {
    console.log('db error', error)
    return error
  }
}

const deleteSong = async (song_id) => {
  try {
    const deletedSong = await db.one(
      'DELETE FROM songs WHERE song_id=$1 RETURNING *',
      song_id
    )
    return deletedSong
  } catch (error) {
    return error
  }
}

module.exports = { getAllSongs, getAllSongPlaylists, deleteSong }
