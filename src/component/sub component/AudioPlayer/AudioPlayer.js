import React from 'react';
import './AudioPlayer.css'

const AudioPlayer = ({ src }) => {
  return (
    <div className="audio-player">
      <audio controls>
        <source src={src} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
