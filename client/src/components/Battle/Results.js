import React from 'react';
import queryString from 'query-string';
import { getUserData } from '../../utils/api';
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
    getUserData(players.playerOneName, players.playerTwoName).then(
     
        function(profiles) {
          console.log(profiles);
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
        });
      }.bind(this)
    );
  }

  render() {
    let { winner, loser, error, loading } = this.state;


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
      console.log('winner', winner)
      console.log('loser', loser)
    return (
      <div className="row">
        {winner && <Player label="Winner" profile={winner} />}
        {loser && <Player label="Loser" profile={loser} />}
      </div>
     );
    }
  }
}

export default Results;
