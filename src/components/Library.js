import React from 'react';

import LibrarySong from './LibrarySong';

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  setIsPlaying,
  isLibOpen,
}) => {
  const renderSongItems = () => {
    return songs.map((song) => (
      <LibrarySong
        key={song.id}
        song={song}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
      />
    ));
  };

  return (
    <div className={`library ${isLibOpen ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">{renderSongItems()}</div>
    </div>
  );
};

export default Library;
