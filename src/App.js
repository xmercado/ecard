import React, { useState } from 'react';
import './App.css';
import GreetingCard from './components/GreetingCard';
import CustomMessage from './components/CustomMessage';

function App() {
  const query = new URLSearchParams(window.location.search);
  const [Greeting, setGreeting] = useState(query.get('greeting') || 'Hello friend,');
  const [Body, setBody] = useState(query.get('body') || 'Have a good one!');
  const [Closing, setClosing] = useState(query.get('closing') || 'From your friend');
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
