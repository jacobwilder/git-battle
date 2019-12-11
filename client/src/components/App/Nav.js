import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
    <div id="navbar">
      <ul className="nav">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/clash">
            Clash
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/scoreboard">
            Scoreboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Meet the Team
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/search">
            Search
          </NavLink>
        </li>
      </ul>
    </div>
    );
  }
}

export default Nav;
