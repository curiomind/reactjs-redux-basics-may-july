import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <p>{process.env.REACT_APP_SITE_NAME}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
