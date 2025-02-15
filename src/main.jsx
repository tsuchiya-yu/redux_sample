import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
