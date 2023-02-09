import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: null
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        // then function and pass the response from the API as its parameter
        .then(response => {
            console.log(response)
            // setState of posts with the data property of the response Object
            this.setState({
                // use in-built isArray method to determine whether the data fetched is in an array or not
                posts: Array.isArray(response.data)
                ? response.data
                // create an array if the data fetched is singular and thus an object and not an array
                : [response.data]
            })
        })
        // use catch method to catch and display any errors
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    render() {

        const posts = this.state.posts;

        return (
            <div>
                <h2>Posts:</h2>
                {
                    // check if posts has a length (ie exists) or not
                    posts.length
                    ?
                    // iterate over posts using map, and give each one some formatting
                    (
                        posts.map(post => (
                            <div key={post.id}>
                                <h2>{post.id}. {post.title}</h2>
                                <h4>By User ID {post.userId}</h4>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        ))
                    )
                    :
                    (
                        // if this.state.error exists, show the error message
                        this.state.error
                        ? <p>{this.state.error}</p>
                        : <h4>Loading posts...</h4>
                    )
                }
            </div>
        )
    }
}

export default HTTPRequests