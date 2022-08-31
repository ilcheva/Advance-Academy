import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Message from "./Components/Message";
import { useState } from "react";

function App() {
    const [message, setMessage] = useState("Hello World");
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Greet name="Son" />
                <Greet name="Sonya" />
                <Greet name="Son" />
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Message message={message} />

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
