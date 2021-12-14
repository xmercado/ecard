import React, { useState } from 'react';
import { TextField, Button, Alert, AlertTitle } from '@mui/material';
import GreetingCard from './GreetingCard';

export default function CustomMessage({ 
  Greeting,
  Body,
  Closing,
  setGreeting,
  setBody,
  setClosing,
  setCanCustomize 
}) {
  const [Email, setEmail] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isValidCard, setIsValidCard] = useState(false);
    
  const verifyInput = (event) => {
      event.preventDefault();
      if (!(Email.length > 0) || !(/\S/.test(Email))
          || !(Greeting.length > 0) || !(/\S/.test(Greeting))
          || !(Body.length > 0) || !(/\S/.test(Body))
          || !(Closing.length > 0) || !(/\S/.test(Closing))) {
            setShowAlert(true);
            setAlertMessage('Form cannot be empty.');
      }
      else {
            setAlertMessage('');
            setShowAlert(false);
            setIsValidCard(true);
      }
  }

  const sendCard = () => {
    let mailto = 'mailto: ';
    mailto += Email;
    mailto += '?subject=greeting ecard';
    mailto += '&body=You have a card greeting!';
    mailto += '%0D%0A%0D%0A';
    mailto += 'Here is your card';
    mailto += '%0D%0A%';

    let url = 'https://xmercado.github.io/ecard';
    url += `?greeting=${encodeURIComponent(Greeting)}`;
    url += `&body=${encodeURIComponent(Body)}`;
    url += `&closing=${encodeURIComponent(Closing)}`;

    mailto += encodeURIComponent(url);

    window.open(mailto);
    setCanCustomize(false);
  }

  return (
    <div className='RowContainer'>
      <form className='CustomizeMessage'>
        <div>
          <h2>
            Customize Message
          </h2>
        </div> 
          <div>
            <div className='FormInput'> 
                <TextField 
                    id='email'
                    label='Recipient Email'
                    value={Email} 
                    onChange={event => setEmail(event.target.value)}
                    margin='dense'
                    variant='filled'
                />
            </div>
            <div className='FormInput'> 
                <TextField 
                    id='greeting'
                    label='Greeting'
                    value={Greeting} 
                    onChange={event => setGreeting(event.target.value)}
                    margin='dense'
                    variant='filled'
                />
            </div>
            <div className='FormInput'> 
                <TextField 
                    id='body'
                    label='Body'
                    value={Body} 
                    onChange={event => setBody(event.target.value)}
                    margin='dense'
                    variant='filled'
                    multiline
                    rows={4}
                />
            </div>
            <div className='FormInput'> 
                <TextField 
                    id='closing'
                    label='Closing'
                    value={Closing} 
                    onChange={event => setClosing(event.target.value)} 
                    margin='dense'
                    variant='filled'
                />
            </div>
            <Button
              className='Button'
              id='preview-card'
              type='submit'
              onClick={(event) => verifyInput(event)}
              variant='contained'
            >
              Preview
            </Button>
          
          {
            showAlert &&
            <Alert 
                style={{margin: 10}}
                severity='error' 
            >
                <AlertTitle>
                    <strong>
                        Invalid Input
                    </strong>
                </AlertTitle>
                {alertMessage}
            </Alert>
          }
            </div>
      </form>
      <div className='Preview'>
        <h2>
          Preview
        </h2>
        <GreetingCard
          Greeting={Greeting}
          Body={Body}
          Closing={Closing}
          setCanCustomize={setCanCustomize}
        />
        { isValidCard
          ?
          <Button
            className='Button'
            id='send-card'
            onClick={() => sendCard()}
            variant='contained'
            color='secondary'
          >
            Send
          </Button>
          :
          <Button
            className='Button'
            id='send-card'
            variant='outlined'
            color='secondary'
          >
            Send
          </Button>
        }
      </div>
    </div>
  );
}