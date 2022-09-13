import React, { Component } from "react";
import Header from "../Header";
import ToDoList from "../ToDoList/TodoList";
import InputTodo from "../InputTodo";
import { v4 as uuidv4 } from "uuid";
import "./ToDoContainer.css";
import NavBar from "../NavBar";
import About from "../About";
import Activity from "../Activity";
import { Routes, Route } from "react-router-dom";

class TodoContainer extends Component {
    // cachedTodos = localStorage.getItem("todos");

    state = {
        todos: [
            {
                id: 1,
                title: "To learn Javascript",
                completed: true,
            },
            // {
            //     id: 2,
            //     title: "To learn Typescript",
            //     completed: false,
            // },
            // {
            //     id: 3,
            //     title: "To learn React",
            //     completed: false,
            // },
            // {
            //     id: 4,
            //     title: "To learn PixiJs",
            //     completed: false,
            // },
        ],
    };

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
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    };

    deleteTask = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter((todo) => {
                    return todo.id !== id;
                }),
            ],
        });
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
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
        console.log(this.state.todos);
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    };
    setUpdate = (updateTitle, id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.title = updateTitle;
                }
                return todo;
            }),
        });
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
    };
    componentDidMount() {
        if (!localStorage.getItem("todos")) {
            localStorage.setItem("todos", JSON.stringify(this.state.todos));
        }
        let getData = JSON.parse(localStorage.getItem("todos"));
        //     localStorage.setItem("todos", JSON.stringify(this.state.todos));
        // // check for getData
        this.setState({ todos: getData });
    }
    render() {
        return (
            <div className="container">
                <div className="navbar">
                    <NavBar />
                </div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div className="content">
                                    <Header />
                                    <InputTodo addTodo={this.addToDoItem} />
                                    <ToDoList
                                        todos={this.state.todos}
                                        handleChangeProps={this.handleChange}
                                        deleteTodoProps={this.deleteTask}
                                        setUpdate={this.setUpdate}
                                    />
                                </div>
                            </>
                        }
                    />
                    <Route path="about">
                        <Route index element={<About />} />
                        <Route path="activity" element={<Activity />} />

                        {/* <Route path="*" element={<TodoContainer />} /> */}
                    </Route>
                </Routes>
            </div>
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
