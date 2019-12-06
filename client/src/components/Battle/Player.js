import React from 'react';
import propTypes from 'prop-types';
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

Player.propTypes = {
  label: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
  profile: propTypes.object.isRequired
};

export default Player;
