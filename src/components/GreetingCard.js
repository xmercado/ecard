import winter from '../images/winter.jpg';

export default function GreetingCard({ Greeting, Body, Closing}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={winter} alt="winter" />
        <p>
          {Greeting}
        </p>
        <p>
          {Body}
        </p>
        <p>
          {Closing}
        </p>
        <button
          className="App-link"
        >
          Reshare This Card
        </button>
      </header>
    </div>
  );
}