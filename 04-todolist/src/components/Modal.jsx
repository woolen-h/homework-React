import React from "react";

function Modal({ isOpen, isClosing, children }) {
  if (!isOpen && !isClosing) return null;

  return (
    <div className={`modal__overlay ${isClosing ? "closing" : "opening"}`}>
      <div className={`modal__content ${isClosing ? "closing" : "opening"}`}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
