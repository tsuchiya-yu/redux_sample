// Action: 状態をどう変更するかの意図を表す
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// ActionCreator: Actionを生成する関数
export const increment = (amount) => ({
  type: INCREMENT, // Actionの種類
  payload: { amount }, // Actionに付随するデータ
});

export const decrement = (amount) => ({
  type: DECREMENT, // Actionの種類
  payload: { amount }, // Actionに付随するデータ
});
