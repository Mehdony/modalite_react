# Modalite React Package

The **Modalite** package is a simple and reusable React component that provides a customizable modal popup functionality for your React applications. This package allows you to display informative messages or content in a visually appealing and user-friendly manner, using a modal dialog.

## Features

- Create a modal popup with a given message.
- Control the display of the modal using the `isOpen` state.
- Automatically open the modal when a new `message` prop is received.
- Close the modal on the click of a "Fermer" (Close) button.

## Installation

You can install the **Modalite** package from npm using the following command:

```bash
npm install modalite
```

or using yarn:

```bash
yarn add modalite
```

## Usage

To use the **Modalite** component in your React application, follow these steps:

1. Import the `Modal` component from the `modalite` package:

```jsx
import Modal from "modalite_react";
```

2. Implement the `Modal` component in your application, providing it with the necessary props:

```jsx
import React, { useState } from "react";
import Modal from "modalite";

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleShowModal = (msg) => {
    setMessage(msg);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* Your application content */}
      <button onClick={() => handleShowModal("Hello from Modalite!")}>
        Show Modal
      </button>

      {showModal && <Modal message={message} setSent={handleCloseModal} />}
    </div>
  );
};

export default MyComponent;
```

## Props

The `Modal` component accepts the following props:

- `message` (string, required): The message to be displayed in the modal popup.
- `setSent` (function, required): A callback function to handle the closing of the modal. It should be used to update the state that controls the visibility of the modal.


## Contributions

Contributions to the **Modalite** package are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository [https://github.com/Mehdony/modalite_react](https://github.com/Mehdony/modalite_reacto).

## Credits

The **Modalite** package is created and maintained by [MazutBismuth](https://github.com/Mehdony/modalite_react).


<!--  Link to the package  -->
[Modalite]: https://www.npmjs.com/package/modalite_react
