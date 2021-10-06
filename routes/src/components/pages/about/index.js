import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class About extends Component {
  render() {
    return (
      <div><h1>about</h1>
      <Link to='/'>home</Link>
      </div>
      
    )
  }

}

export default About;