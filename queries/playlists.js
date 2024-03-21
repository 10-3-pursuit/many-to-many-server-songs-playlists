const db = require('../db/dbconfig.js')

const getAllPlaylists = async () => {
  try {
    const allPlaylists = await db.any('SELECT * FROM playlists')
    return allPlaylists
  } catch (error) {
    console.log('db error', error)
    return error
  }
}

const getSongsFromPlaylist = async (name) => {
  try {
    const songsFromPlaylist = await db.any(
      'SELECT playlists.name AS name, songs.title AS title, songs.artist AS artist FROM playlistSongs JOIN playlists ON playlistSongs.playlist_id = playlists.playlist_id JOIN songs ON playlistSongs.song_id = songs.song_id WHERE LOWER(playlists.name) = LOWER($1)',
      name
    )

    return songsFromPlaylist
  } catch (error) {
    console.log('db error', error)
    return error
  }
}

const deletePlaylist = async (playlist_id) => {
  try {
    const deletedPlaylist = await db.one(
      'DELETE FROM playlists WHERE playlist_id=$1 RETURNING *',
      playlist_id
    )
    return deletedPlaylist
  } catch (error) {
    return error
  }
}

module.exports = { getSongsFromPlaylist, deletePlaylist, getAllPlaylists }
