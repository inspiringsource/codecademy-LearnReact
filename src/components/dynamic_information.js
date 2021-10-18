import React from 'react' //imr
import ReactDOM, { render } from 'react-dom' //imrd

class App extends React.Component {
  // constructor method begins here:
  constructor(props) {
    super(props)
    {
      this.state = { title: 'Best App' }
    }
  }

  render() {
    return <h1>{this.state.title}</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('app'))