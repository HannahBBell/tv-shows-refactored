import React from 'react';
import './App.css';
import mappedEpisodes from './Episodes';

function Apps() {
  return (
    <div>
      {mappedEpisodes()}
    </div>
  )
}

export default Apps;