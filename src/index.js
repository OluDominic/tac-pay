import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider} from 'react-alert'
import { BrowserRouter } from 'react-router-dom'
import App from './App';

  
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}
 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
