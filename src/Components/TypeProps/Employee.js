import React, { Component } from 'react';


class Employee extends Component {
    render() {
        return (
            <>
        <h1>Your name is: {this.props.name}</h1>
        <p>Employee Age: {this.props.age}</p>
        <p>Employee ID: {this.props.empId}</p>

        </>
        )
    }
}

export default Employee;