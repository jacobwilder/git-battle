import React from 'react';
import queryString from 'query-string';
import { getPlayers } from '../../utils/api';
import { Link } from 'react-router-dom';
import Player from './Player';
import Loading from '../Reusable/Loading';

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
    console.log(players);
    getPlayers(players.playerOneName, players.playerTwoName, players.playerThreeName).then(
     
        function(profiles) {
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
            winner: profiles[0],
            runnerup: profiles[1],
            loser: profiles[2],
            loading: false
          };
        });
      }.bind(this)
    );
  }

  render() {
    let { winner, runnerup, loser, error, loading } = this.state;


    if (loading) {
      return <Loading speed={200} />;
    } else if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    } else { 
    return (
      <div className="row">
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Runner Up" score={runnerup.score} profile={runnerup.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </div>
     );
    }
  }
}

export default Results;
