import React, { Component } from 'react';


class Passingargument extends Component {

    state = {
        name: 'Awais',
        id: 1
    }
    clickHere = ()=> {
        console.log(this.state.id)
    }
    render(){
        return(
            <>
            <h1> Hello Student</h1>
            <p>Name: {this.state.name}</p>
            <button onClick={this.clickHere}>Click me</button>
            </>
        );
    }
}

export default Passingargument;