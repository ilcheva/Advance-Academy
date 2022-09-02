import React, { Component } from "react";
import "./ToDoItem.module.css";
// import { Button } from "react-bootstrap";

class ToDoItem extends Component {
    buttonSyling = {
        marginTop: "15px",
    };
    todoCompleted = {
        color: "#eaeaea",
        textDecoration: "line-through",
        fontStyle: "italic",
    };
    render() {
        return (
            <li className={this.props.todo.completed ? "done" : ""}>
                <input
                    type="checkbox"
                    checked={this.props.todo.completed}
                    // onChange={() => console.log("clicked checkbox")}

                    onChange={() =>
                        this.props.handleChangeProps(this.props.todo)
                    }
                />
                {/* <Button
                style={this.buttonSyling}
                    onClick={() =>
                        this.props.deleteTodoProps(this.props.todo.id)
                    }>
                    Delete
                </Button> */}
                <button
                    style={this.buttonSyling}
                    onClick={() =>
                        this.props.deleteTodoProps(this.props.todo.id)
                    }>
                    &#128465;
                </button>
                <span
                    style={
                        this.props.todo.completed ? this.todoCompleted : null
                    }>
                    {this.props.todo.title}
                </span>
            </li>
        );
    }
}

// function ToDoItem({todo, handleChangeProps, deleteTodoProps}) {
//     return (
//         <li>
//             <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => handleChangeProps(todo)}
//             />
//             {todo.title}
//              <button
//                     onClick={() =>
//                         deleteTodoProps(todo.id)
//                     }>
//                     Delete
//                 </button>
//         </li>
//     );
// }
export default ToDoItem;
