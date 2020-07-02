import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from "./../../images/dm_white_logo.png";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div>
          <img src={logo} alt="dm logo" />
        </div>
        <ul>
          <li>
            <link to='/'>Home</link>
            </li>
          <li>
            <link to='topics'>Topics</link>
            </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
