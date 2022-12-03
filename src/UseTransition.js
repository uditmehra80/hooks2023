import React, { useState, useTransition } from 'react';

function UseTransition(props) {
    const [isPending, startTransition] = useTransition();

    const [name, setName] = useState("")
    const [list, setList] = useState([])


    // function handleChange(e) {
    //     setName(e.target.value)
    //     const l = []
    //     for (let i = 0; i <= 20000; i++) {
    //         l.push(e.target.value)
    //     }
    //     setList(l)
    // }

    function handleChange(e) {
        setName(e.target.value)
        //startTransition k andar rahega wo low priority
        // last m call hoga baki top ki chize call ho
        //jayegi and component render ho jayega
        // and wait karega ye startTransition k complete hone ka
        //than phr re-render ho jayega
        // matlab COMPONENTS 2 bar render hoga
        startTransition(() => {
            const l = []
            for (let i = 0; i <= 20000; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })
    }

    console.log('RENDER')

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            {list.length}
            {isPending ? <h4>Please wait...</h4> : list.map((item, index) => {
                return <h6 key={index}>{item}</h6>
            })}

        </div>
    );
}

export default UseTransition;