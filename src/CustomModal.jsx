import React, { useRef, useImperativeHandle } from "react";

function CustomModal({ open, onClose }, ref) {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      closeBtn: () => closeRef.current.focus(),
      confirmBtn: () => confirmRef.current.focus(),
    };
  });

  if (!open) return null;

  return (
    <div>
      <button onClick={onClose}>&times;</button>
      <br />
      <input ref={closeRef} type="text" />
      <br />
      <textarea ref={confirmRef}></textarea>
    </div>
  );
}

export default React.forwardRef(CustomModal);
