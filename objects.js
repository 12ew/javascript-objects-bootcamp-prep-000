var playlist = {
  name: 'song'
};

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle
  return playlist;
}
