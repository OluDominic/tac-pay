import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import {store} from './redux/store';
import { Provider } from 'react-redux';

  
const options = {
  position: positions.TOP_RIGHT,
  timeout: 2000,
  offset: '30px',
  transition: transitions.SCALE
}
 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
