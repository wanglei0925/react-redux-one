import * as types from "./actionTypes";
import axios from 'axios';
export const handleInputValue = value => ({
  type: types.CHANGE_INPUT_VALUE,
  value
});
export const handleBtnClick = () => ({
  type: types.ADD_ITEM
});
export const handleDelete = index => ({
  type: types.DETELE_ITEM,
  index
});
export const initList = data => ({
  type: types.GETINIT,
  data
});
export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get("/list.json")
      .then(res => {
        const action = initList(res.data);
        dispatch(action);
      })
      .catch(() => {
        alert("error");
      });
  };
};
