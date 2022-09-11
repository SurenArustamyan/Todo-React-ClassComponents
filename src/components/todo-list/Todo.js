import React from "react";
import { v4 as uuid } from "uuid";
import "./style.css";

class Todo extends React.Component {
  render() {
    const { handleDelete, handleIsChecked, todoItems } = this.props;
    return (
      <div className="TodoContainer">
        {todoItems.map((item, i) => {
          return (
            <div className="todo-list" key={uuid()}>
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked={!!item.isCompleted}
                onClick={() => handleIsChecked(item)}
              />
              <h2
                className="text"
                style={{
                  textDecoration: item.isCompleted ? "line-through" : "none",
                }}
              >
                {item.title}
              </h2>
              <h2 className="delete" onClick={() => handleDelete(item.id)}>
                &#10006;
              </h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Todo;
