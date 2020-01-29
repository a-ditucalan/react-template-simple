import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <div>
        <div>This is the About page</div>
        <Link to="/">Link to Home</Link>
      </div>
    )
  }
}