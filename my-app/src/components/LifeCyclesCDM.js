import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {
    constructor(props) {
        console.log('contructor called')
        super(props)

        this.state = {
            data: 'loading'
        }
    }

    getData() {
        console.log('getData() called')
        // change the data state to loaded after 3s
        setTimeout(() => {
            console.log('Data fetched!')
            this.setState({
                data: 'loaded'
            })
        }, 3000)
    }

    componentDidMount() {
        console.log('Component mounted')
        // call the getData() method
        this.getData()
    }

    render() {
        console.log('Render method called')
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM