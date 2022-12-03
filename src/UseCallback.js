//UseCallback:
// useCallback is a React Hook that lets you 
// cache a function definition between re-renders.
// useCallback will return a memoized version of the callback that 
// only changes if one of the dependencies has changed.This is useful 
// when passing callbacks to optimized child components 
// that rely on reference equality to prevent unnecessary renders
import React, { useState, useCallback } from 'react';
import MyCompo from './components/MyCompo';

function UseCallback() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    //  AISE M THEME CHANGE KARNE PAR BHI getItems call ho raha tha
    // jiski wajah se MyCompo ka useEffect render ho raha everytime

    // const getItems = () => {
    //     return [number, number + 1, number + 2];
    // }

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    }, [number])

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    }

    return (
        <div style={theme}>
            <input autoFocus type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark((prev) => !prev)}>Change theme</button>
            <MyCompo getItems={getItems} />
        </div>
    );
}

export default UseCallback;