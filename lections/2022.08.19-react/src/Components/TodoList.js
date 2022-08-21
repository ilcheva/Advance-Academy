import React, { Component } from "react";
import ToDoItem from "./TodoItem";

// class ToDoList extends Component {
//     render() {
//         return (
//             <ul>
//                 {this.props.todos.map((todo) => (
//                     <ToDoItem key={todo.id} todo={todo} />
//                 ))}
//             </ul>
//         );
//     }
// }
function ToDoList(props) {
    return (
        <ul>
            {props.todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}
export default ToDoList;
