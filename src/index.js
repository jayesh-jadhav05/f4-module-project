import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Header />
  <App />
  </BrowserRouter> 
  </Provider>
  ,
  document.getElementById('root')
)