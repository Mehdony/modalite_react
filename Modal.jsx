import React, { useState, useEffect } from "react";

const Modal = ({ message, timeDuration }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, timeDuration);
    return () => clearTimeout(timer); 
  }, [timeDuration]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#283728",  // Assuming you want the color blue
        minWidth: "250px",
        padding: "1rem",
        borderRadius: "5px",
        textAlign: "center",
        height: "200px",
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",

      }}
    >
      <div>{message}</div>
    </div>
  );
};

export default Modal;