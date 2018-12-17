import React, { Component } from "react";
import "./style.css";
export default class Orderitem extends Component {
    // constructor(props) {
    //     super(props)
    // }
  render() {
      const {text,index} = this.props
    return (
      <div className="orderitem" onClick={this.handleItem.bind(this)}>
       <div> {text}  ++ {index}</div>
      </div>
    );
  }
  handleItem() {
      this.props.handleDelete(this.props.index)
  }
}
