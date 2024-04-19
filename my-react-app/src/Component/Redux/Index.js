// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxComponent from '../Redux';

import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({
  reducer: reducer
});

ReactDOM.render(
  <Provider store={store}>
    <ReduxComponent />
  </Provider>,
  document.getElementById('root')
);
