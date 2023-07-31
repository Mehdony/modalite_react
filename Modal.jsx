import React, { useState, useEffect } from "react";

/**
 * A simple modal component that displays a message and a button to close it.
 * 
 * @component
 * @param {Object} props - The component's props.
 * @param {string} props.message - The message to be displayed in the modal.
 * @param {Function} props.setSent - A function to update the state after the modal is closed.
 * @returns {JSX.Element|null} Returns a JSX element representing the modal or null if it's closed.
 */

const Modal = ({ message, setSent }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    // const timer = setTimeout(() => {
    //   setIsOpen(false);
    // }, timeDuration);
    // return () => clearTimeout(timer); 
  }, [message]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
        rowGap: "1rem",
      }}
    >
      <div>{message}</div>
      <button style={{
        backgroundColor: "#000",  // Assuming you want the color blue
        color: "white",
        fontSize: "1.5rem",
        fontWeight: "bold",
        border: "none",
        borderRadius: "5px",
        padding: "0.5rem",
        cursor: "pointer",
        width: "100px",
        height: "50px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block"
      }} onClick={() => {setSent(false); setIsOpen(false)}}>Close</button>
    </div>
  );
};

export default Modal;
