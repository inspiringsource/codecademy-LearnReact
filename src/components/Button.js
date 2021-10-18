import React from 'react' //imr + tab
import ReactDOM from 'react-dom' //imrd + tab

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = {text: 'I am a button'} //provides the button component with default text

ReactDOM.render(
  <Button text="Happy:)"/>, //override the default
  document.getElementById('app')
);

