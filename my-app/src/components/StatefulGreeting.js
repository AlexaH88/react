import React from "react";

// needs extends React.Component so that it's recognised as React and not just simple JS
class StatefulGreeting extends React.Component {
    // classes can't return without render() first
    render() {
        // this is needed on class components in order to render props. Because Component object already has props.
        return <h1>Hello, {this.props.greeting}</h1>
    }
}

export default StatefulGreeting;