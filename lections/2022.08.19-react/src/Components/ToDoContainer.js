import React, { Component } from "react";
import Header from "./Header";
import ToDoList from "./TodoList";

// class TodoContainer extends Component {
//     state = {
//         todos: [
//             {
//                 id: 1,
//                 title: "To learn Javascript",
//                 completed: true,
//             },
//             {
//                 id: 2,
//                 title: "To learn Typescript",
//                 completed: false,
//             },
//             {
//                 id: 3,
//                 title: "To learn React",
//                 completed: false,
//             },
//             {
//                 id: 4,
//                 title: "To learn PixiJs",
//                 completed: false,
//             },
//         ],
//     };
//     render() {
//         return (
//             // <React.Fragment>
//             //     it can be written with <></> --  with stric

//             //     <div>
//             //         <header>
//             //             <h1>Hello From my First React App</h1>
//             //         </header>
//             //         <p>I am Todo container react component</p>
//             //         <input type="text" value="input field" />
//             //      </div>
//             // </React.Fragment>
//             <ToDoList todos={this.state.todos} />
//         );
//     }
// }
function TodoContainer() {
    const state = {
        todos: [
            {
                id: 1,
                title: "To learn Javascript",
                completed: true,
            },
            {
                id: 2,
                title: "To learn Typescript",
                completed: false,
            },
            {
                id: 3,
                title: "To learn React",
                completed: false,
            },
            {
                id: 4,
                title: "To learn PixiJs",
                completed: false,
            },
        ],
    };
    return (
        <>
            <Header />
            <ToDoList todos={state.todos} />
        </>
    );
}

export default TodoContainer;
