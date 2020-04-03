import React from 'react';


function clickHere(e){
    e.preventDefault();
    alert("Function Clicked");
}
function Handlerclick () {
  
        return (
            <>
            <h1>Click functions</h1>
            <button onClick={clickHere}>Click here</button>
            <a href="https://www.google.com" onClick={clickHere}>Google</a>
            </>
        )
    
    
    }
export default Handlerclick;
   
    