import React, { Component } from "react";
import { GrAdd } from "react-icons/gr";
class InputTodo extends Component {
    state = {
        title: "",
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: "",
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Add todo..."
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                />
                <button type="submit">
                    <GrAdd
                        style={{
                            color: "red",
                            fontSize: "25px",
                            margin: "10px",
                        }}
                    />
                </button>
            </form>
        );
    }
}
export default InputTodo;
