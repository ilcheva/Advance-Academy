let message = 'I love Typescript/Javascript'
export let message2 = 'Hello message 2!'

export function getMessage() {
    return message
}
export function setMessage(msg) {
    console.log(msg)
}
export let x = 50,
    y = 100,
    result = 0

export function sum() {
    return (result = x + y)
}
export function multiply() {
    result = x * y
    return result
}

function substract() {
    result = y - x
    return result
}
export { substract  as subAlias}
