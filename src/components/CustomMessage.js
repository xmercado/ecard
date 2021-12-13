export default function CustomMessage({ Greeting, Body, Closing, setCanCustomize }) {
  return (
    <div>
      <p>
        Customize form component here
      </p>
      <button
        onClick={() => setCanCustomize(false)}
      >
        Can Customize state toggle
      </button>
    </div>
  );
}