import React from 'react';
import PropTypes from 'prop-types';


class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      speed: props.speed
    };
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <div className="lds-ripple"><div></div><div></div></div>;
  }
}

Loading.PropTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};


export default Loading;
