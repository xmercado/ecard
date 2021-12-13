import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import GreetingCard from './components/GreetingCard';
import CustomMessage from './components/CustomMessage';

function App() {
  const [Greeting, setGreeting] = useState('Dear Mom,');
  const [Body, setBody] = useState('Happy Holidays!');
  const [Closing, setClosing] = useState('From Your Son');
  const [canCustomize, setCanCustomize] = useState(false);

  return (
    <>
      { canCustomize
          ?
            <CustomMessage
              Greeting={Greeting}
              Body={Body}
              Closing={Closing}
              setCanCustomize={setCanCustomize}
            />
          :
            <GreetingCard
              Greeting={Greeting}
              Body={Body}
              Closing={Closing}
              setCanCustomize={setCanCustomize}
            />
      }
    </>
  );
}

export default App;
