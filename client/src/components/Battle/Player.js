import React from 'react';
import propTypes from 'prop-types';
import Profile from './Profile';

// stateless functional component
function Player(props) {
  return (
    <div>
      <h1 className="header">{props.label}</h1>
      <h3 style={{ textAlign: 'center' }}>Score: {props.score}</h3>
      <Profile info={props.profile} />
    </div>
  );
}

Player.propTypes = {
  label: propTypes.string.isRequired,
  score: propTypes.number.isRequired,
  profile: propTypes.object.isRequired
};

export default Player;
