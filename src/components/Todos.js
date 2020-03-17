import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from "../actions/todos";
import List from "./List";

class Todos extends React.Component {
  addItem = e => {
    e.preventDefault();

    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ""))
    );
  };

  //Add optimistic UI Update, primero actualizar el frontend y luego el backend
  removeItem = todo => {
    this.props.dispatch(handleDeleteTodo(todo));
  };

  //Add optimistic UI Update, primero actualizar el frontend y luego el backend
  toggleItem = id => {
    this.props.dispatch(handleToggle(id));
  };
  render() {
    return (
      <div>
        <h1>TODOS</h1>
        <input
          type="text"
          placeholder="Enter todos"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    );
  }
}

export default connect(state => ({ todos: state.todos }))(Todos);
