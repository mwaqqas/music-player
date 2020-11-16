import React from 'react';

import LibrarySong from './LibrarySong';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  setIsPlaying,
  isLibOpen,
  setIsLibOpen,
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
      <div className="heading-container">
        <h2>Library</h2>
        <button onClick={() => setIsLibOpen(false)}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
      </div>
      <div className="library-songs">{renderSongItems()}</div>
    </div>
  );
};

export default Library;
