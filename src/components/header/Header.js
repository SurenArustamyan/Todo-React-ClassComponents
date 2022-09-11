import React from "react";
import "./style.css";

class Header extends React.Component {
  render() {
    const { handleOnChange, text, handleAdd } = this.props;
    return (
      <div className="container">
        <input
          type="text"
          placeholder="Type Here..."
          className="input"
          value={text}
          onChange={(e) => handleOnChange(e)}
        />
        <button className="add" onClick={() => handleAdd()}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default Header;
