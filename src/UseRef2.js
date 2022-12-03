import React, { useState, useRef } from 'react';

function UseRef2() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart() {
        console.log("START")

        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 1);

    }

    function handleStop() {
        console.log("STOP")
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>

            <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
        </>
    );
}

export default UseRef2;