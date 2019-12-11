import React from "react";
import queryString from "query-string";
import { getUserData, postUserData } from "../../utils/api";
import { Link } from "react-router-dom";
import Player from "./Player";
import Loading from "../Reusable/Loading";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    let players = queryString.parse(this.props.location.search);
    getUserData(players.playerOneName, players.playerTwoName).then(
      function(profiles) {
        console.log(profiles);
        console.log("PROPS: ", players);
        if (!profiles) {
          return this.setState(function() {
            return {
              error:
                "Oops! We've encountered an error! Check to ensure all github users exist.",
              loading: false
            };
          });
        }

        this.setState(function() {
          return {
            error: null,
            winner: profiles.data[0],
            loser: profiles.data[1],
            loading: false
          };
        }, () => this.dataToSend());
      }.bind(this)
    );
  }

  dataToSend = () => {
    const winnerObj = {
      userName: this.state.winner.login,
      repos: this.state.winner.public_repos,
      commits: this.state.winner.commits,
      score: this.state.winner.score
    };

    const loserObj = {
      userName: this.state.loser.login,
      repos: this.state.loser.public_repos,
      commits: this.state.loser.commits,
      score: this.state.loser.score
    };

    postUserData(winnerObj)
      .then(playerData => console.log(playerData))
      .catch(err => console.log(err));
    postUserData(loserObj)
      .then(playerData => console.log(playerData))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    let { winner, loser, error, loading } = this.state;

    if (loading) {
      return <Loading speed={200} />;
    } else if (error) {
      return (
        <div>
          <p> {error} </p> <Link to="/clash"> Reset </Link>{" "}
        </div>
      );
    } else {
      console.log("winner", winner);
      console.log("loser", loser);
      return (
        <div className="row">
          {" "}
          {winner && <Player label="Winner" profile={winner} />}{" "}
          {loser && <Player label="Runner-Up" profile={loser} />}{" "}
        </div>
      );
    }
  }
}

export default Results;
