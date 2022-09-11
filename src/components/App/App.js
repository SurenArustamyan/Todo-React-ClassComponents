import React from "react";
import Footer from "../footer";
import Header from "../header";
import TodoList from "../todo-list";
import { v4 as uuid } from "uuid";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todoItems: [],
    };
  }

  render() {
    const handleOnChange = (e) => {
      this.setState({ text: e.target.value });
    };

    const handleAdd = () => {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { title: this.state.text, id: uuid(), isCompleted: false },
        ],
        text: "",
      });
    };

    const handleDelete = (id) => {
      this.setState({
        todoItems: this.state.todoItems.filter((item) => item.id !== id),
      });
    };

    const handleIsChecked = (todo) => {
      const todos = [...this.state.todoItems];
      todos.map((t) => {
        if (t.id === todo.id) {
          t.isCompleted = !t.isCompleted;
        }
        return t;
      });
      this.setState({ todos });
    };

    const handleCleareAll = () => {
      this.setState({
        todoItems: [
          ...this.state.todoItems.filter((item) => !item.isCompleted),
        ],
      });
    };
    const completed = this.state.todoItems.filter(
      (item) => item.isCompleted
    ).length;
    return (
      <div className="App">
        <Header
          handleOnChange={handleOnChange}
          handleAdd={handleAdd}
          text={this.state.text}
        />
        <TodoList
          handleDelete={handleDelete}
          todoItems={this.state.todoItems}
          handleIsChecked={handleIsChecked}
        />
        <Footer
          handleCleareAll={handleCleareAll}
          length={this.state.todoItems.length}
          completed={completed}
        />
      </div>
    );
  }
}

export default App;
