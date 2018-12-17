import * as types from "./actionTypes.js";
const defaultState = {
  inputValue: "hello woeld",
  list: ["1", "2"]
};
export default (state = defaultState, action) => {
    if(action.type === types.CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === types.ADD_CLICK) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }
    if(action.type === types.DETELE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        console.log(action.index)
        newState.list.splice(action.index,1)
        return newState;
    }
  return state;
};
