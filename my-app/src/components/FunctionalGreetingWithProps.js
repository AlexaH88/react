import React from "react";


// vanilla JS
// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

// arrow function version
// const FunctionalGreetingWithProps = () => <h1>Hello</h1>;

// with props
const FunctionalGreetingWithProps = (props) => {
    // can console log out and view in DevTools console
    // console.log(props);
    return <h1>Hello, {props.name}! I see you're {props.age} years old; {props.greeting}!</h1>;
}

export default FunctionalGreetingWithProps;