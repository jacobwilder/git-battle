import React from 'react';
import Profile from './Profile';

// stateless functional component
function Player(props) {
  console.log('props.profile', props.profile);
  return (
    <div>
      <h1 className="header">{props.label}</h1>
      {props.profile.score && <h3 style={{ textAlign: 'center' }}>Score: {props.profile.score}</h3>}
      {props.profile && <Profile info={props.profile} />}
    </div>
  );
}

export default Player;
