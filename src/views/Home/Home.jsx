import React, { Component } from 'react'
import './Home.less'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="home">
        <h1 className="h-txt">This is Home Page!!!</h1>
        <img src={require('@/images/avatar.jpg')}/>
      </div>
    )
  }
}
