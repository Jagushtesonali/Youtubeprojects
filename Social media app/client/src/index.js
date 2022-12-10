import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import { Authcontextprovider } from './Authcontext/Authcontext.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Authcontextprovider><App/>
 </Authcontextprovider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

