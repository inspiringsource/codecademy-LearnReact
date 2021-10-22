import React from 'react'
import ReactDOM from 'react-dom'
import { Child } from './Child.js'

class Parent extends React.Component {
  constructor(props) {
    super(props)
    {
      this.state = { name: 'Frarthur' }
    }
  }
  render() {
    return <div></div>
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'))