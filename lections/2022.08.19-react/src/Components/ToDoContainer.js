import React, { Component } from "react";
import Header from "./Header";
import ToDoList from "./TodoList";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends Component {
    state = {
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
    // handleChange = (element) => {
    //     element.completed=!element.completed
    //     console.log("I am clicked", element);
    // };
    handleChange = (element) => {
        // this.setState({
        //     todos: this.state.todos.map((todo) => {
        //         //todo === element ? todo.completed = !todo.completed : false;
        //         if (todo === element) {
        //             todo.completed = !todo.completed;
        //         }
        //         return todo;
        //     }),
        // });
        this.setState((previousState) => ({
            todos: previousState.todos.map((todo) => {
                if (todo === element) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            }),
        }));
    };

    deleteTask = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter((todo) => {
                    return todo.id !== id;
                }),
            ],
        });
    };
    addToDoItem = (todoTitle) => {
        const newTodoItem = {
            id: uuidv4(),
            title: todoTitle,
            completed: false,
        };
        this.setState({
            todos: [...this.state.todos, newTodoItem],
        });
    };
    render() {
        return (
            <React.Fragment>
                {/* //     it can be written with <></> --  with stric

            //     <div>
            //         <header>
            //             <h1>Hello From my First React App</h1>
            //         </header>
            //         <p>I am Todo container react component</p>
            //         <input type="text" value="input field" />
            //      </div> */}
                <Header />
                <InputTodo addTodo={this.addToDoItem} />
                <ToDoList
                    todos={this.state.todos}
                    handleChangeProps={this.handleChange}
                    deleteTodoProps={this.deleteTask}
                />
            </React.Fragment>
        );
    }
}
// function TodoContainer(state) {
//     let todos = [
//         {
//             id: 1,
//             title: "To learn Javascript",
//             completed: true,
//         },
//         {
//             id: 2,
//             title: "To learn Typescript",
//             completed: false,
//         },
//         {
//             id: 3,
//             title: "To learn React",
//             completed: false,
//         },
//         {
//             id: 4,
//             title: "To learn PixiJs",
//             completed: false,
//         },
//     ];

//     const [getTodos, setTodos] = useState(() => todos);

//     // const [getTodos, setDotos] = useState([todos]);

//     // useEffect(() => {
//     //     // setTodos(todos);
//     //     // console.log(getTodos);
//     // }, [todos]);
//     const handleChange = (element) => {
//         // element.completed = !element.completed;
//         let HandledTodos = getTodos.map((todo) => {
//             if (todo.id === element.id) {
//                 todo.completed = !todo.completed;
//             }
//             return todo;
//         });
//         setTodos(HandledTodos);
//     };
//     const deleteTask = (id) => {
//         let filtededTodos = getTodos.filter((todo) => todo.id !== id);
//         setTodos(filtededTodos);
//         // this.setState({
//         //     todos: [
//         //         ...state.todos.filter((todo) => {
//         //             return todo.id !== id;
//         //         }),
//         //     ],
//         // });
//     };

//     return (
//         <>
//             <Header />
//             <ToDoList
//                 todos={getTodos}
//                 //todos={state.todos}
//                 handleChangeProps={handleChange}
//                 deleteTodoProps={deleteTask}
//             />
//         </>
//     );
// }

export default TodoContainer;
