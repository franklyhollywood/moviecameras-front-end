import React, { Component } from 'react'
import './App.css'
import request from 'superagent'

export default class App extends Component {

  state = {
  moviecameras: []
}

componentDidMount = async () => {
  const response = await request.get('https://moviecamerasii.herokuapp.com/moviecamerasII')
  // const response = await request.get('http://localhost:7890/moviecamerasII')

  this.setState({ moviecameras: response.body })
}

  render() {
    return (
      <div>
        
        
        {this.state.moviecameras.map(moviecamera => <div>
          <p>{moviecamera.make}</p>
          <p>{moviecamera.model}</p>
          <img src = {moviecamera.image} alt = {moviecamera.make}/>
          <p>{moviecamera.year_made}</p>
          <p>{moviecamera.sound}</p>
          </div>)}
      </div>
    )
  }
}