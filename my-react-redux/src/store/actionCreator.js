import * as types from "./actionTypes.js";
export const changeInputValue = (value) => ({
  type: types.CHANGE_INPUT_VALUE,
  value
});
export const addClick = () => ({
    type: types.ADD_CLICK,
});
export const deleteItem = (index) => ({
  type: types.DETELE_ITEM,
  index
});