import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Context, {CurrencyContext} from '../src/context/Context'


ReactDOM.render(
  <React.StrictMode>
    <CurrencyContext>
     <Context>
       <App />
     </Context>
    </CurrencyContext>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
