import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, List } from "antd";
import store from "../../store";
import {
  handleInputValue,
  handleBtnClick,
  handleDelete,
  getTodoList
} from "../../store/actionCreators";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <div style={{ marginTop: "30px", width: "400px" }}>
        <div>
          <Input
            style={{ width: "200px", height: "40px" }}
            placeholder="todo info"
            value={this.state.inputValue}
            onChange={this.handleInputValue}
          />
        </div>
        <div onClick={this.handleBtnClick}>添加</div>
        <div style={{ marginTop: "30px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleDelete.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState);
  }
  handleInputValue(e) {
    const action = handleInputValue(e.target.value);
    store.dispatch(action);
  }
  handleBtnClick() {
    const action = handleBtnClick();
    store.dispatch(action);
  }
  handleDelete(index) {
    const action = handleDelete(index);
    store.dispatch(action);
  }
}
