import React from 'react';
import './lecture.css';

const Lecture = () => {
  const videoIds = [
    'Iga0h0p6DcI',
    'AzV3EA-1-yM',
    '9o0UPuDBM8M',
    's2NQhpFGIOg',
    'Eml2xnoLpYE',
    '9MazN_6wdqI',
    'dj03_VDetdw',
    '3sEeVJEXTfY',
    'Z88Rl5bpnmI',
    'syS4M1G-rII',
    'gcNh17Ckjgg',
    '2_e4I-brfqs',
  ];

  return (
    <div className="lecture">
      <h1>Exercise Lectures</h1>
      <div className="video-container">
        {videoIds.map((videoId, index) => (
          <div key={videoId} className="video-wrapper">
            <iframe
              className='main-video'
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube Video ${videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lecture;
