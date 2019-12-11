import React from 'react';
//import ReactRouter from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from '../Clash/Clash';
import Scoreboard from '../Scoreboard/Scoreboard';
import Results from '../Clash/Results';
import Search from '../Search/Search';
import Contact from '../Contact/Contact';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/clash" component={Battle} />
            <Route exact path="/scoreboard" component={Scoreboard} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/clash/results" component={Results} />
            <Route path="/search" component={Search} />
            <Route
              render={function() {
                return <p>Page Not Found</p>;
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
