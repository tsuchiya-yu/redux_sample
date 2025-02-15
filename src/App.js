import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';

const App = () => {
  return (
    // Provider: アプリ全体にStoreを提供
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
