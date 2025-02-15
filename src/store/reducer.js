import { INCREMENT, DECREMENT } from './actions';

// 初期状態
const initialState = {
  count: 0,
};

// Reducer: 状態を実際に更新する純粋関数
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: // INCREMENTアクションを処理
      return { ...state, count: state.count + action.payload.amount };
    case DECREMENT: // DECREMENTアクションを処理
      return { ...state, count: state.count - action.payload.amount };
    default: // その他のアクションは状態を変更しない
      return state;
  }
};

export default counterReducer;
