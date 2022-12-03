//UseMemo:
//Pass a “create” function and an array of dependencies.
//  useMemo will only recompute the memoized value when one 
//  of the dependencies has changed. This optimization helps 
//  to avoid expensive calculations on every render.
import React, { useState, useEffect, useMemo } from 'react';

const slowFunction = (num) => {
    console.log('calling slow function')
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2
}

function UseMemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    //aisa krne par slwfunction every time run
    // hota tha every render number change hota tha tab bhi

    // const doubleNumber = slowFunction(number);


    //run first time and number change hoga tab
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);


    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    }

    // const theme = useMemo(() => {
    //     return {
    //         backgroundColor: dark ? "black" : "white",
    //         color: dark ? "white" : "black",
    //     }
    // }, [dark])


    //number change par bhi run hoga bcoz theme 
    //object h uski ref value same nahi hoti
    useEffect(() => {
        console.log('THEME EFFECT')
    }, [theme])

    return (
        <div >
            <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark((prev) => !prev)}>Change theme</button>
            <div style={theme}>
                {doubleNumber}
            </div >
        </div>
    );
}

export default UseMemo;