import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/actions';

const Counter = () => {
  // 状態を取得
  const count = useSelector((state) => state.count); // Storeの状態を取得
  const dispatch = useDispatch(); // Actionを送信するための関数

  return (
    <div>
      <p>Count: {count}</p>
      {/* EventHandler: ボタンのクリックイベント */}
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
    </div>
  );
};

export default Counter;