import React from "react";
import { useEffect } from "react";
function Greet({ name, age }) {
    const message = `Hello, ${name}`;

    // BAD PRACTICE
    // document.title = `Greeting to ${name}`;
    // return <div>{message}</div>;

    //GOOD PRACTICE
    //useEffect(callback,[dependencies])
    //with [dependencies] we can control how when and how many times to call the effect
    // [] means only once
    // not having dependencies will call useEffect everytime

    useEffect(() => {
        document.title = `Greeting to ${name}`;
        console.log(message);
    }, [name,age]);
    return <div>{message}</div>;
}
export default Greet;
