import React from 'react' //imr + tab
import ReactDOM from 'react-dom' //imrd + tab

class MyComponentClass extends React.Component {
    render() {
        return <h1>Hello world</h1>;
    }
};

ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
);