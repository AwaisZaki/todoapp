import React, { useState } from 'react';


const UseCustomeHook = ()=> {
    const [salary, settSalary] = useState(0);
    
    const incremeantSalary = ()=> {
        settSalary(salary + 500);
    }

    return [salary, incremeantSalary];
}

export default UseCustomeHook;