import logo from './logo.svg';
import './App.css';
import Parse from "parse";

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f', // This is your Application ID
  '4wPYRKbpTJeCdmFNaS31AiQZ8344aaYubk6Uo8VW' // This is your Javascript key
);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
