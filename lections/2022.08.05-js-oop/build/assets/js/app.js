// import {
//     getMessage,
//     setMessage,
//     x,
//     y,
//     result,
//     sum,
//     multiply,
// } from './message.js'
import { setMessage } from './message.js'
import * as messageLib from './message.js'
// document.getElementById('mainHeader').innerHTML = getMessage()

// setMessage('Hello from generic setMessage')

// console.log(sum());

document.getElementById('mainHeader').innerHTML = messageLib.getMessage()
console.log(messageLib.subAlias())

export default messageLib;
export { setMessage }
