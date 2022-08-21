import React, { Component } from "react";

// class ToDoItem extends Component {
//     render() {
//         return <li>{this.props.todo.title}</li>;
//     }
// }

function ToDoItem(props) {
    return <li>{props.todo.title}</li>;
}
export default ToDoItem;
