import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apiResponse: null
        }
    }

    postToApi = () => {
        // use axios.post() method which requires two parameters: the url as a string and the data {} in the format the chosen API requires
        // axios automatically adds the POST method, stringify() and header usually required to be specified (eg when using fetch)
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello world!',
                body: 'It works!',
                userId: 123,
            }
        )
        // update apiResponse with response.data
        .then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }

    render() {

        // destructured apiResponse from this.state
        const {apiResponse} = this.state;

        return (
            <div>
                <button onClick={this.postToApi}>
                    Create Post
                </button>
                {
                    // if apiResponse is truthy
                    apiResponse
                    ?
                    (
                        <div>
                            <h1>{apiResponse.title}</h1>
                            <p>post id:{apiResponse.id}</p>
                            <p>{apiResponse.body}</p>
                            <p>user id:{apiResponse.userId}</p>
                        </div>
                    )
                    :
                    (
                        <p>Please click the button above</p>
                    )
                }
            </div>
        )
    }
}

export default HTTPPost