import React from 'react';


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

export default Loading;
