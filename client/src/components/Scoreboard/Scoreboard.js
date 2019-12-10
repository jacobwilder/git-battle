import React from "react";
import Loading from "../Reusable/Loading";
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
      <div className="tableDiv">
        {this.state.scoreboard.length > 0 ? (
          <table className="tableOne" /*key={user._id}*/>
            <thead>
              <tr>
                  <th>User</th>
                  <th>Score</th>
                  <th>Repos</th>
                  <th>Commits</th>
              </tr>
            </thead>
            <tbody>
              {this.state.scoreboard.map(user =>
                <tr>
                  <td>{user.userName}</td>
                  <td>{user.score}</td>
                  <td>{user.repos}</td>
                  <td>{user.commits}</td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <Loading speed="250" />
        )}
      </div>
    );
  }
}


export default Scoreboard;
