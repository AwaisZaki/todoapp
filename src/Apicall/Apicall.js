import React, { useState, useEffect } from 'react'




const Apicall = () => {

    const [data, setData] = useState('No Data Available')

    // useEffect(()=> {
    //     console.log('AFAFAFAFAFA')
    //     axios.get(`https://jsonplaceholder.typicode.com/users`)
    //     .then(res => {
    //         console.log(res.data)       

    //         setData(res.data);
    //     })
    // })  
    // const getData = ()=> {
        
    //     }
    return (
        <>
            <ul>
                <h1>Apicall</h1>
            </ul>
            <button >Submit</button>
        </>
    )
}

export default Apicall;