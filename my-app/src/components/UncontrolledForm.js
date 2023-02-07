import React, { Component } from 'react'

export class UncontrolledForm extends Component {

    constructor(props) {
        super(props)
        // refs
        this.inputName = React.createRef();
        this.inputCategory = React.createRef();
        this.inputComments = React.createRef();
    }

    handleSubmit = (event) => {
        // prevents default from running ie the page being refreshed
        event.preventDefault();
        // access input value
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComments.current.value)
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input 
                            id="id-name" 
                            name="name" 
                            type="text"
                            // if you need a default value use defaultValue and not value as value will override the DOM and make it uneditable
                            defaultValue="John Smith"
                            // add ref value, which allows React to access the DOM input
                            ref={this.inputName}
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query Category:</label>
                        <select 
                            name="category" 
                            id="id-category"
                            ref={this.inputCategory}
                        >
                                <option value="website">Website Issue</option>
                                <option value="order">Order Issue</option>
                                <option value="general">General Inquiry</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea
                            name="comments" 
                            id="id-comments"
                            ref={this.inputComments}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm