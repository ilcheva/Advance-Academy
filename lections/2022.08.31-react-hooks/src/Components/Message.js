import React from "react";
import { useEffect } from "react";
function Message({ message }) {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log(message);
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, [message]);
    return <div>I am logging console: {message}</div>;
}
export default Message;
