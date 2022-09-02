// import React, { useState } from "react";

import React, { Component } from "react";
import ToDoItem from "../ToDoItem/TodoItem";
import './ToDoList.css'

class ToDoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                    />
                ))}
            </ul>
        );
    }
}
// function ToDoList({todos,handleChangeProps,deleteTodoProps}) {
//     return (
//         <ul>
//             {todos.map((todo) => (
//                 <ToDoItem
//                     key={todo.id}
//                     todo={todo}
//                     handleChangeProps={handleChangeProps}
//                     deleteTodoProps={deleteTodoProps}
//                 />
//             ))}
//         </ul>
//     );
// }
export default ToDoList;
