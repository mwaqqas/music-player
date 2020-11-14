import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  nextSong,
  prevSong,
}) => {
  // Refs
  const audioRef = useRef(null);

  // song state
  const [songState, setSongState] = useState({
    currentTime: 0,
    duration: 0,
  });

  // helpers
  const getNormalTime = (time) => {
    if (time) {
      return (
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
      );
    } else {
      return '0:00';
    }
  };

  // event handlers
  const handlePlayPauseSong = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const handleSongTimer = (event) => {
    setSongState({
      ...songState,
      currentTime: event.target.currentTime,
      duration: event.target.duration,
    });
  };

  const handleSeekBarDrag = (event) => {
    audioRef.current.currentTime = event.target.value;

    setSongState({ ...songState, currentTime: event.target.value });
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentSong, isPlaying]);

  return (
    <div className="player">
      <div className="time-control">
        <p>{getNormalTime(songState.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songState.duration}
          value={songState.currentTime}
          onChange={handleSeekBarDrag}
        />
        <p>{getNormalTime(songState.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={prevSong}
        />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={handlePlayPauseSong}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={nextSong}
        />
      </div>
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={handleSongTimer}
        onLoadedMetadata={handleSongTimer}
      ></audio>
    </div>
  );
};

export default Player;
