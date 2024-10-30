import React, { Component } from 'react'
import loader from "../assets/loader.gif"

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loader} alt="Loading" />
      </div>
    )
  }
}
