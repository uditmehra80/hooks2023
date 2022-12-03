//useLayoutEffect
// useLayoutEffect fires in the same phase as componentDidMount 
// and componentDidUpdate.However, we recommend starting with
//  useEffect first and only trying useLayoutEffect if that causes a problem.
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function UseLayoutEffect(props) {
    const [show, setShow] = useState();
    const popup = useRef();
    const button = useRef();

    useEffect(() => {
        console.log("bbbbbbbbb")

        if (popup.current == null || button.current == null) return
        const { bottom } = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 30}px`
    })
    //pehle uselayout call hota h phr upar wala usseeffct
    useLayoutEffect(() => {
        console.log("AAAAA")
    })

    return (
        <div>
            <button ref={button} onClick={() => setShow(prev => !prev)}>
                Click here
            </button>
            {show && (
                <div ref={popup} style={{ position: 'absolute' }}>
                    POP DIV
                </div>
            )}
        </div>
    );
}

export default UseLayoutEffect;