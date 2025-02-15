import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer';

// Store: 状態を保持し、Actionを受け取る場所
const store = configureStore({
    reducer: counterReducer,
});

export default store;
