import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div><h1>home</h1>
      <Link to='/about'>go to about</Link>
      </div>
    )
  }

}

export default Home;