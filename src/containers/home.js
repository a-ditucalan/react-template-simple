import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Swiper from 'react-id-swiper'
import 'react-id-swiper/src/styles/scss/swiper.scss'

import '../stylesheets/main.scss'

export default class Home extends Component {
  render() {    return (
      <div>
        <div>This is the Homepage</div>
        <Link to="/about">Link to About</Link>

        <Swiper>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
          <div>Slide 4</div>
          <div>Slide 5</div>
        </Swiper>
      </div>
    )
  }
}