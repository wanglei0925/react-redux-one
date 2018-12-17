import React, { Component } from "react";
import Orderitem from "../Listitem";
export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [111, 222],
      inputValue: ""
    };
  }
  handlerAdd(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handlerBtn(e) {
    this.setState({
      inputValue: "",
      list: [...this.state.list, this.state.inputValue]
    });
  }
  ItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
  getTodoItem() {
      return this.state.list.map((item, index) => {
        return (
          <div key={index}>
            <Orderitem text={item} index = {index} handleDelete={this.ItemDelete.bind(this)}></Orderitem>
          </div>
        );
      })
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handlerAdd.bind(this)}
          />
          <button onClick={this.handlerBtn.bind(this)}>添加</button>
        </div>
        {this.getTodoItem()}
      </div>
    );
  }
}
