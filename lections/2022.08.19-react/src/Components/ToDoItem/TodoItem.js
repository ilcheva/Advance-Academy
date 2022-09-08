import React, { Component } from "react";
import styles from "./ToDoItem.module.css";
// import { Button } from "react-bootstrap";

class ToDoItem extends Component {
    state = {
        editView: false,
    };
    buttonSyling = {
        marginTop: "15px",
    };
    todoCompleted = {
        color: "#eaeaea",
        textDecoration: "line-through",
        fontStyle: "italic",
    };
    handleEditing = () => {
        this.setState({
            editView: true,
        });
    };
    handleUpdatedDone = (e) =>
        e.key === "Enter" ? this.setState({ editView: false }) : false;

    render() {
        let viewMode = {};
        let editMode = {};
        if (this.state.editView) {
            viewMode.display = "none";
        } else {
            editMode.display = "none";
        }
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
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
                            this.props.todo.completed
                                ? this.todoCompleted
                                : null
                        }>
                        {this.props.todo.title}
                    </span>
                </div>
                <input
                    type="text"
                    style={editMode}
                    className={styles.textInput}
                    value={this.props.todo.title}
                    onChange={(e) =>
                        this.props.setUpdate(e.target.value, this.props.todo.id)
                    }
                    onKeyDown={this.handleUpdatedDone}
                />
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
