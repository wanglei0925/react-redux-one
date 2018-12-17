import React, { Component } from "react";
// import TodoList from "./compontent/todoList";
import Header from './compontent/Header/header'
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
      <Header/>
        {/* <TodoList /> */}
      </div>
      </Provider>
    );
  }
}

export default App;
