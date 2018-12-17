import React, { Component } from "react";
import { connect } from "react-redux";
import { changeInputValue, addClick, deleteItem} from "../store/actionCreator";
class todoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div>
        <div>
          <input
            onChange={this.props.handleInputChange}
            value={this.props.inputValue}
          />
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {this.props.list.map((item, index) => {
            return <li key={index} onClick={this.props.handleDelete.bind(this, index)}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
  // handleClick() {}
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputChange(e) {
      const action = changeInputValue(e.target.value);
      dispatch(action);
    },
    handleClick() {
      console.log('add')
      const action = addClick();
      dispatch(action);
    },
    handleDelete(index) {
      const action = deleteItem(index);
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todoList);
