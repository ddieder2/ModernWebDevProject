import './App.css';
import './Nav.css';
import React from 'react';
import { initializeParse } from  '@parse/react';
import Components from './Components/Components';

// Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
// Parse.initialize(
//   'vmhk69ASXetFNV66CXRxN4zZlSgQ7HeR53jaoeAV', // This is your Application ID
//   '9zPzMSb6SdBr5o3NqjFIlsLPLEo1ORJ48gW0D1Mc' // This is your Javascript key
// );

initializeParse(
  'https://modernwebdev-td.b4a.io', // e.g. YOUR_APP_NAME.b4a.io
  'vmhk69ASXetFNV66CXRxN4zZlSgQ7HeR53jaoeAV', // This is your Application ID
  '9zPzMSb6SdBr5o3NqjFIlsLPLEo1ORJ48gW0D1Mc' // This is your Javascript key
);


function App() {
  return (
    <div className="App">
      <Components />
    </div>
  );
}

export default App;
