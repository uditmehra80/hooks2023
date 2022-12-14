import React, { useId } from 'react';

function UseId(props) {
    const id = useId()
    const id1 = useId()

    console.log(id);
    console.log(id1);
    return (
        <>
            <div>
                <label htmlFor={`${id}-email`}>Email</label>
                <input id={`${id}-email`} type="email" />
            </div>
            <div>
                <label htmlFor={`${id}-password`}>Password</label>
                <input id={`${id}-password`} type="password" />
            </div>
        </>
    )
}

export default UseId;