import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import GreetingCard from './components/GreetingCard'

function App() {
  const [Greeting, setGreeting] = useState('Dear Mom,');
  const [Body, setBody] = useState('Happy Holidays!');
  const [Closing, setClosing] = useState('From Your Son');
  return (
    <GreetingCard
      Greeting={Greeting}
      Body={Body}
      Closing={Closing}
    />
  );
}

export default App;
