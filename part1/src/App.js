import "./App.css";

function App() {
  const name = <h1>Jesus</h1>;
  const age = <h2>21</h2>;
  const email = <h2>jesus@jesus.com</h2>;
  return (
    <div className="App">
      <div>
        <User />
      </div>
    </div>
  );
}

const User = () => {
  return (
    <div>
      <h1>Jesus</h1>
      <h1>23</h1>
      <h1>jesus@jesus.com</h1>
    </div>
  );
};

export default App;
