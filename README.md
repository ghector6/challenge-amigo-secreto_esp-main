# Friends List Manager

A lightweight JavaScript application to manage a list of friends, dynamically display the list, and randomly select one friend. Perfect for small group activities or decision-making tasks.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Code Overview](#code-overview)
  - [Key Functions](#key-functions)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Features

- **Add Friends:** Add friend names to a list dynamically.
- **View Friends:** Display the list of friends in real-time.
- **Random Friend Selector:** Randomly select a friend from the list with one click.
- **Clean UI Updates:** Automatically clears and updates elements without requiring a page reload.

---

## Getting Started

### Prerequisites

Ensure you have:
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Installation

1. Clone the repository or download the ZIP:
   ```bash
   git clone https://github.com/your-username/friends-list-manager.git
   ```
2. Open the `index.html` file in your browser to launch the application.

---

## Usage

### Adding Friends
1. Enter a name in the input field.
2. Click **"Agregar Amigo"** to add it to the list.

### Viewing Friends
- The list of friends is displayed dynamically under the input field.

### Sorting a Friend
1. Click the **"Sortear Amigo"** button.
2. A random friend's name will appear, and the list will be cleared.

---

## Project Structure

```
├── index.html      # Main HTML file for the app
├── styles.css      # Optional CSS file for styling
├── script.js       # JavaScript logic for the app
├── README.md       # Project documentation
```

---

## Code Overview

### Key Functions

#### `agregarAmigo()`
- Adds a friend to the `friendsList` array after validating the input.
- Calls `mostrarListaAmigos()` to update the list dynamically.

#### `mostrarListaAmigos()`
- Clears and re-renders the list of friends in the UI.

#### `limpiarInput()`
- Resets the input field for better user experience.

#### `obtenerAmigo()`
- Randomly selects a friend's name from the `friendsList` array.
- Alerts the user if the list is empty.

#### `sortearAmigo()`
- Displays the randomly selected friend and clears the visible list of friends.

---

## Example Code

Here is a snippet of the core random selection logic:

```javascript
function obtenerAmigo() {
  if (friendsList.length === 0) {
    alert("Debes ingresar un amigo");
    return;
  }
  let randomIndex = Math.floor(Math.random() * friendsList.length);
  return friendsList[randomIndex];
}

function sortearAmigo() {
  let resultado = obtenerAmigo();
  if (resultado) {
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${resultado}`;
  } else {
    document.getElementById('resultado').innerHTML = "";
  }
}
```

---

## Contributing

Contributions are welcome! If you’d like to enhance this project:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with detailed explanations of your changes.

---

## License

This project is licensed under the [MIT License](./LICENSE). Feel free to use it in your own projects.

---

## Acknowledgements

- Inspired by the simplicity of DOM manipulation with vanilla JavaScript.
- Thanks to all contributors who maintain open-source learning resources.

---

## Author

Developed by [ghector6](https://github.com/ghector6).


