import React from 'react' //imr+TAB
import ReactDOM from 'react-dom' //imrd+TAB

class MyName extends React.Component {
	// name property goes here:
get name() {
    return 'Avi';
}

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));
