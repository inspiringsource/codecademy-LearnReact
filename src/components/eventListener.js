import React from 'react' //imr+TAB
import ReactDOM from 'react-dom' //imrd+TAB

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!')
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>
  }
}

ReactDOM.render(<Button />, document.getElementById('app'))
