import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter } from 'react-router-dom'
import App from './App';

  
const options = {
  position: positions.TOP_RIGHT,
  timeout: 2000,
  offset: '30px',
  transition: transitions.SCALE
}
 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
