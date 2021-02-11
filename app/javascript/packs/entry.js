import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import store from './src/store';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {
  window.store = store;
  ReactDOM.render(
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  );
});
