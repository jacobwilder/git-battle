import React from "react";
import propTypes from "prop-types";
import { findUserData } from "../../utils/api";
import animate from "@jam3/gsap-promise";

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreboard: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    animate.from(this.label, 0.2, { y: -200, delay: 0.1 });
    findUserData().then(
      function(info) {
        this.setState(function() {
          return { scoreboard: info.data };
        });
      }.bind(this)
    );
  }

  handleChange(event) {
    this.setState({ user: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      loading: true
    });

    this.setState({
      loading: false
    });
  }

  render() {

    return (
      <div>
        {this.state.scoreboard.length > 0 ? (
          this.state.scoreboard.map(user => {
            return (
              <div key={user._id}>
                <p>{user.userName}</p>
                <p>{user.score}</p>
                <p>{user.repos}</p>
                <p>{user.commits}</p>
              </div>
            );
          })
        ) : (
          <h1>Waiting for API data...</h1>
        )}
      </div>
    );
  }
}

Scoreboard.propTypes = {
  user: propTypes.string.isRequired,
  userInfo: propTypes.object.isRequired
};

export default Scoreboard;
