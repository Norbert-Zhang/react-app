import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      borderBottom: "1px #ccc dotted",
      padding: "10px",
      textDecoration: this.props.item.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.item;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            checked={this.props.item.completed ? "checked" : ""}
            onChange={this.props.markComplete.bind(this, id)}
          ></input>{" "}
          {title}
          <button
            onClick={this.props.deleteItem.bind(this, id)}
            style={btnStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const btnStyle = {
  backgroundColor: "#ff0000",
  coler: "#ffffff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
