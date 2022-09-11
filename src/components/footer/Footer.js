import React from "react";
import "./style.css";

class Footer extends React.Component {
  render() {
    const { handleCleareAll, length, completed } = this.props;
    return (
      <div className="footer-container">
        <button className="clear" onClick={() => handleCleareAll()}>
          Clear All
        </button>
        <h2>{`${completed}/${length}`}</h2>
      </div>
    );
  }
}

export default Footer;
