//useRef:
//useRef is a React Hook that lets you reference 
//a value that’s not needed for rendering.

//useref state k jaise kam karta h but state change hoti
// h to components re-render hota h but useref change hota h to components 
// re-render nahi hota 

import React, { useRef, useState, useEffect } from 'react';

function UseRef(props) {
    const [name, setName] = useState('Kyle')

    const previousName = useRef(null);
    const inputRef = useRef(null);


    useEffect(() => {
        previousName.current = name
    }, [name])

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
            <br />

            <input value={name} onChange={e => setName(e.target.value)} />
            <div>previousName:{previousName.current} == name:{name}</div>
        </>
    )

}

export default UseRef;