import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  render() {
    return this.props.list.map((item) => {
      return (
        <TodoItem
          key={item.id}
          item={item}
          markComplete={this.props.markComplete}
          deleteItem={this.props.deleteItem}
        />
      );
    });
  }
}

//PropTypes
Todos.propTypes = {
  list: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Todos;
