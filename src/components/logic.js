import React from 'react' //imr + tab
import ReactDOM from 'react-dom' //imrd + tab

const friends = [
    {
      title: "Yummmmmmm",
      src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
      title: "Hey Guys!  Wait Up!",
      src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
    },
    {
      title: "Yikes",
      src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
    }
  ];
  
  // New component class starts here:

  class Friend extends React.Component{
      render() {
        const friend = friends[2]

          return(
              <div>
                  <h1>{friend.title}</h1>
                  <img src={friend.src}/>
              </div>
          )
      }
  }

  ReactDOM.render(
      <Friend />,
      document.getElementById('app')
  )

