import "./App.css";

function App() {
  const name = <h1>Jesus</h1>;
  const age = <h2>21</h2>;
  const email = <h2>jesus@jesus.com</h2>;
  return (
    <div className="App">
      <div>
        <User name="jesus" age={23} email="jesus@jesus.com" />
        <User name="david" age={23} email="david@david.com" />
        <User name="laura" age={23} email="laura@laura.com" />
      </div>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
