import React, { Component } from 'react'

export class ControlledForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            category: 'website',
            comments: ''
        }
    }

    // pass event as parameter, to enable us to get the value of the field each time the event happens
    handleNameChange = (event) => {
        // variable for form field value, each time event is triggered
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        // prevents defaqult from running ie the page being refreshed
        event.preventDefault();
        // here you would decide where the data is submitted eg to an API
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input 
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            id="id-name" 
                            name="name" 
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query Category:</label>
                        <select 
                            value={this.state.category}
                            onChange={this.handleCategoryChange} 
                            name="category" 
                            id="id-category">
                                <option value="website">Website Issue</option>
                                <option value="order">Order Issue</option>
                                <option value="general">General Inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea
                            value={this.state.comments}
                            onChange={this.handleCommentsChange}
                            name="comments" 
                            id="id-comments" 
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm