import React from "react";

// needs extends React.Component so that it's recognised as React and not just simple JS
class StatefulGreeting extends React.Component {
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
        };
    }

    handleClick() {
        // sets new state properties and keeps previous if unchanged
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        });
        console.log(this.state.introduction)
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
            </div>
        );
    }
}

export default StatefulGreeting;