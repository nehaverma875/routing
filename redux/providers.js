// Provider.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

const ReduxProvider = ({ children }) => {
  const state = store.getState();
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
