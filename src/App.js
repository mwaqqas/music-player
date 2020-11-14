import React, { useState } from 'react';

// styles
import './styles/app.scss';

// data
import data from './util';

// components
import Song from './components/Song';
import Player from './components/Player';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // helpers
  const handleChangeSong = (direction) => {
    let index = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === 'next') {
      setCurrentSong(songs[index + 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        nextSong={() => handleChangeSong('next')}
        prevSong={() => handleChangeSong('previous')}
      />
    </div>
  );
}

export default App;
