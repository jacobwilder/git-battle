import React from 'react';
import propTypes from 'prop-types';


class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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

Loading.propTypes = {
  speed: propTypes.number.isRequired
};


export default Loading;
