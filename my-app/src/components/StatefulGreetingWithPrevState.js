import React from "react";

// needs extends React.Component so that it's recognised as React and not just simple JS
class StatefulGreetingWithPrevState extends React.Component {
    // constructor method is always called first, and state is usually defined here
    // best practice to also add props on constructor and super functions so that any future props added are taken into account.
    constructor(props) {
        // must always call super function first. Ensuring that parent (React.Component) is also called.
        super(props);
        // set state as an empty object
        // this.state = {};
        // create different state properties
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        // setState() is an asynchronous function, meaning it runs in the background while other things are happening
        // sets new state properties and keeps previous if unchanged
        this.setState({
            // ternary conditional statement: if the introduction is Hello it will change to Goodbye, otherwise it will remain Hello
            introduction: this.state.introduction === "Hello" ? "Goodbye!" : "Hello",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        // add a callback function here so the code is run after setState()
        }, () => {
            console.log('new state', this.state.introduction)
            console.log('new state', this.state.buttonText)
        });
    }

    increment() {
        this.setState({
            count: this.state.count +1,
        })
    }

    // classes can't return without render() method first
    render() {
        // this is needed on class components in order to render props. Because Component object already has props.
        // returning only one value
        // return <h1>Hello, {this.props.greeting}</h1>
        // return () to allow for multiple things to be returned
        return (
            // React only wants one element returned from render(). Contain everything in a div.
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>Increment</button>
                <p>You've clicked {this.state.count} times</p>
            </div>
        );
    }
}

export default StatefulGreetingWithPrevState;