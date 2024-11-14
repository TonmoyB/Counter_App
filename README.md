# Counter Web App

This is a simple counter web application built with HTML, CSS, and JavaScript. It allows users to increment a counter and reset it to zero. The project demonstrates the use of JavaScript closures to manage the counter state.

---

## Live Demo

Try out the app live at the following link:

[Counter Web App on Vercel](https://project02-three.vercel.app/)

---

## Features

- **Increment Counter**: Click the "COUNT" button to increase the counter value by 1.
- **Reset Counter**: Click the "RESET" button to reset the counter value to 0.

---

## File Structure

### HTML - `index.html`

This file contains the structure and layout of the web app, including:
- A display area to show the counter value.
- Buttons for incrementing and resetting the counter.

### CSS - `style.css`

This file styles the main container, counter display area, and buttons. Key styles include:
- `.mainBody` for overall layout.
- `.countValue` for displaying the counter.
- `.counterButton` and `.resetButton` for the styling of the COUNT and RESET buttons.
- **Responsive Design**: Media queries are used to adjust the layout on smaller screens.

### JavaScript - `script.js`

This file handles the functionality of the app:
- **countFunc**: A closure that returns two functions, `continueCount` and `resetCount`, to manage the counter state.
- **countResult**: Increments the counter and displays the updated value.
- **resetFunc**: Resets the counter to zero and updates the display.

---

## How to Run the App

1. Download all the files in this repository.
2. Open the `index.html` file in any web browser.
3. Click the "COUNT" button to increment the counter.
4. Click the "RESET" button to reset the counter to zero.

---

## Functions Overview

- **countFunc**: A closure function that creates and maintains a private counter variable, allowing functions to increment or reset the counter.
- **countResult**: Calls `countFunc` to update and display the current counter value.
- **resetFunc**: Resets the counter value to zero.

---

## Dependencies

No external libraries are required; only basic HTML, CSS, and JavaScript are used.

---

## License

This project is open-source and available under the MIT License.

---

Enjoy using the [Counter Web App](https://project02-three.vercel.app/)!
