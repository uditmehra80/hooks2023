import React, { useState, useRef } from 'react';
import CustomModal from './CustomModal';

function UseImperativeHandle(props) {
    const [open, setOpen] = useState(false);
    const modalRef = useRef();

    return (
        <>
            <button onClick={() => setOpen(true)} className='btn btn-danger'>OPEN</button>
            <button onClick={() => modalRef.current.closeBtn()} className='btn btn-dark'>INPUT FOCUS</button>
            <button onClick={() => modalRef.current.confirmBtn()} className='btn btn-success'>TEXTAREA FOCUS</button>
            <CustomModal
                ref={modalRef}
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    )
}

export default UseImperativeHandle;
