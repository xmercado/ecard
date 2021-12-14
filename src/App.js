import React, { useState } from 'react';
import './App.css';
import GreetingCard from './components/GreetingCard';
import CustomMessage from './components/CustomMessage';

function App() {
  const [Greeting, setGreeting] = useState('Greeting');
  const [Body, setBody] = useState('Body');
  const [Closing, setClosing] = useState('Closing');
  const [canCustomize, setCanCustomize] = useState(false);

  return (
    <div className='App'>
      { canCustomize
          ?
            <CustomMessage
              Greeting={Greeting}
              Body={Body}
              Closing={Closing}
              setGreeting={setGreeting}
              setBody={setBody}
              setClosing={setClosing}
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
    </div>
  );
}

export default App;
