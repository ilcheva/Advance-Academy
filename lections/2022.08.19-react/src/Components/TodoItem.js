import React, { Component } from "react";

class ToDoItem extends Component {
    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    checked={this.props.todo.completed}
                    // onChange={() => console.log("clicked checkbox")}

                    onChange={() =>
                        this.props.handleChangeProps(this.props.todo)
                    }
                />
                <button
                    onClick={() =>
                        this.props.deleteTodoProps(this.props.todo.id)
                    }>
                    Delete
                </button>
                {this.props.todo.title}
            </li>
        );
    }
}

// function ToDoItem(props) {
//     return (
//             <li>
//             <input type="checkbox"  checked={props.todo.completed}/>
//                 {props.todo.title}</li>

//     );
// }
export default ToDoItem;
