import React from 'react'
import './App.css';
import { Greeting } from './components/greetings';

function App() {
  return (
    <div>
      <h1>
        Welcome to app
      </h1>
      <Greeting name="Avi" />
      <article>
        Article text:  where is my phone?
      </article>
  </div>
  );
}

export default App;
