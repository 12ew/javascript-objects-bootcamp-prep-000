var playlist = {
  name: 'song'
};

function updatePlaylist(playlist, artistName, songTitle) {
 
  return Object.updatePlaylist({}, playlist, { [artistName]: songTitle });
}
