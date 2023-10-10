import './App.css';
import './Nav.css';
import Parse from "parse";
import Components from './Components/Components';

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f', // This is your Application ID
  '4wPYRKbpTJeCdmFNaS31AiQZ8344aaYubk6Uo8VW' // This is your Javascript key
);
function App() {
  return (
    <div className="App">
      <Components />
    </div>
  );
}

export default App;
