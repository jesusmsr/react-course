import "./App.css";

function App() {
  const age = 15;
  const isGreen = true;

  return (
    <div className="App">
      <h1 className="name">
        {age >= 18 ? <h1>OVER AGE</h1> : <h1>Under AGE</h1>}
        <h1 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h1>

        {isGreen && <button>Button</button>}
      </h1>
    </div>
  );
}

export default App;
