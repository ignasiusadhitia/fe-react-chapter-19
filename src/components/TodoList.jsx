// src/components/TodoList
import React from "react";
import TodoItem from "../components/Todoitem";
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: "",
    };
    this.todoId = 0;
  }
  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };
  addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: this.todoId++,
      text: this.state.input,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      input: "",
    }));
  };
  toggleComplete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };
  removeTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };
  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        <form className="input-group" onSubmit={this.addTodo}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleInputChange}
            required
            placeholder="Enter a task"
            className="form-control"
          />

          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </form>
        {this.state.todos.length > 0 ? (
          this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={this.toggleComplete}
              removeTodo={this.removeTodo}
            />
          ))
        ) : (
          <div className="alert alert-secondary mt-3 text-center">
            <p className="mb-0 font-weight-bold">No Todo available</p>
          </div>
        )}
      </div>
    );
  }
}
