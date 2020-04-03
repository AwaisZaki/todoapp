import React, { useState } from 'react';
import UseCustomeHook from './Custome';

function Usestatefunction() {
    const [name, setName] = useState('Kamran');
    const [age, setAge] = useState('23');
    const [id, setId] = useState(101);
    const [salary, increamentSalary] = UseCustomeHook();

    const handler = () => {
        setName('Ahmed');
        setAge(27);
        setId(102);
    }

    return (
        <>
        <h1>Working with use state</h1>
    <p>your name is : {name}</p>
    <p>your Age is : {age}</p>
    <p>your id is : {id}</p>

        
        <button onClick={handler}>Change State</button>
        <p>Employee Salary {salary} </p>
        <button onClick={increamentSalary}> Increament Salary</button>
        </>
    )
}

export default Usestatefunction;