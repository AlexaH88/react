import React, { Component } from 'react'

export class EventsClass extends Component {
    // method on the class, so no function keyword needed
    clickHandler() {
        console.log("Clicked the class button")
    }

    render() {
        return (
            // this keyword needed on the class event listener
        <div>
            <button onClick={this.clickHandler}>click me - class component</button>
        </div>
        )
    }
}

export default EventsClass