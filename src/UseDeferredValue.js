//useDeferredValue is a React Hook that lets you defer updating a part of the UI.
//useDeferredValue for use for low priority like
// input turant change hoga but wo everytime render nhi hoga run nahi hoga
// thoda sa time lega and phr value provide karega

import React, { useState, useDeferredValue, useMemo, useEffect } from 'react';

function UseDeferredValue(props) {
    const [name, setName] = useState("");
    const deferredName = useDeferredValue(name);

    // const list = useMemo(() => {
    //     const largeList = []
    //     for (let i = 0; i <= 20000; i++) {
    //         largeList.push(<div key={i}>{name}</div>)
    //     }
    //     return largeList
    // }, [name])

    //same as transition

    const list = useMemo(() => {
        const largeList = []
        for (let i = 0; i <= 20000; i++) {
            largeList.push(<div key={i}>{deferredName}</div>)
        }
        return largeList
    }, [deferredName])

    function handleChange(e) {
        setName(e.target.value)
    }

    useEffect(() => {
        console.log(`Input=${name} --AND Defferred valu =${deferredName}`)
    })

    return <>
        <input type="text" value={name} onChange={handleChange} />{list.length}
        {list}
    </>
}

export default UseDeferredValue;