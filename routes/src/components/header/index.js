import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        header
        <Link to="/about">About</Link>
        <hr/>
      </div>
    
    )
  }

}

export default Header;