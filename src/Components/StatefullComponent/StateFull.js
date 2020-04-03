import React, { Component } from 'react';

class Statefull extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }

        
      
    }
    increament = ()=> {
        this.setState({ count: this.state.count + 1 });
    }
    decreament = ()=> {
        this.setState({ count: this.state.count - 1 });
    }


    render() {
        return (
            <>
               
                <button onClick={this.increament}>Increament</button>
                <button onClick={this.decreament}>Decreament</button>

                <p>Counter: {this.state.count}</p>
            </>
        )
    }
}

export default Statefull;