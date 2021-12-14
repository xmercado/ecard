import React from 'react';
import winter from '../images/winter.jpg';
import { Button} from '@mui/material';

export default function GreetingCard({
    Greeting,
    Body,
    Closing,
    setCanCustomize
}) {

    return (
    <div>
        <img className='CardImage' src={winter} alt='winter' />
        <p>
            {Greeting}
        </p>
        <p>
            {Body}
        </p>
        <p>
            {Closing}
        </p>
        <Button
            className='Button'
            id='reshare-card'
            onClick={() => setCanCustomize(true)}
            variant='contained'
        >
            Reshare This Card
        </Button>
    </div>
  );
}