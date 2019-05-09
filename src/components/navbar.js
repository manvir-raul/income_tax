import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
  render() { 
    return ( 
      <nav className="nav-wrapper blue darken-3">
        <div className="container">
          <a  className="brand-logo">INCOME TAX</a>
          <ul className="right ">
            <li><Link to='./'> Entry</Link></li>
            <li><Link to='./calculation'> Calculation</Link></li>
            <li><Link to='./contact'> contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
 
export default Navbar;
