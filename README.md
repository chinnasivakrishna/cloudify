# Dropdown Table UI with React

This project is a dynamic UI built with React that allows users to manage rows of dropdown options and custom inputs. The design aligns with the style shown in the provided image, featuring a clean, responsive grid layout and interactive elements.

## Features
- **Dynamic Row Management**: Add new rows dynamically using the "Add New Row" button.
- **Dropdown Selection**: Select options from a predefined dropdown list for each row.
- **Custom Options**: Add custom options via an input field for each row.
- **Option Highlighting**: Display selected and custom options within each row for easy identification.
- **Responsive Design**: Optimized layout for desktop and smaller screens.

## Installation
To set up and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dropdown-table-ui.git
   ```

2. Navigate to the project directory:
   ```bash
   cd dropdown-table-ui
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## How to Use

1. **Adding Rows**:
   - Click the **Add New Row** button to add a new row with its own label, dropdown, and custom input field.

2. **Selecting Options**:
   - Use the dropdown menu within each row to select predefined options (e.g., "Option 1", "Option 2").
   - Selected options will be displayed below the dropdown.

3. **Adding Custom Options**:
   - Enter a new custom option in the input field and press Enter or click the **Add** button.
   - Custom options will appear below the input field.

4. **Viewing Selections**:
   - Selected and custom options are visually grouped and displayed for each row.

## Folder Structure
```
.
├── src
│   ├── App.js         # Main React component
│   ├── index.js       # Application entry point
│   └── styles.css     # Styles for the application (if using CSS files)
├── public
│   └── index.html     # HTML template
└── package.json       # Project configuration and dependencies
```

## Code Highlights

### Adding Rows
Rows are managed via the `rows` state, initialized with two default rows:
```jsx
const [rows, setRows] = useState([
  { label: "Label 1", selectedOptions: [], customOptions: [] },
  { label: "Label 2", selectedOptions: [], customOptions: [] },
]);

const addNewRow = () => {
  setRows([
    ...rows,
    { label: `Label ${rows.length + 1}`, selectedOptions: [], customOptions: [] },
  ]);
};
```

### Dropdown and Custom Options
Predefined dropdown options and custom inputs are handled with methods to update the state dynamically:
```jsx
const handleOptionChange = (rowIndex, option) => {
  const newRows = [...rows];
  if (newRows[rowIndex].selectedOptions.includes(option)) {
    newRows[rowIndex].selectedOptions = newRows[rowIndex].selectedOptions.filter(
      (item) => item !== option
    );
  } else {
    newRows[rowIndex].selectedOptions.push(option);
  }
  setRows(newRows);
};

const handleAddCustomOption = (rowIndex, newOption) => {
  if (newOption.trim() !== "") {
    const newRows = [...rows];
    newRows[rowIndex].customOptions.push(newOption);
    setRows(newRows);
  }
};
```

## Styling
The application uses inline styling for simplicity. Key styles include:
- **Responsive Grid Layout**:
  ```jsx
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  ```
- **Interactive Buttons**:
  ```jsx
  background: "#000",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "5px",
  ```

## Future Enhancements
- Add validation for duplicate custom options.
- Improve accessibility with ARIA roles and keyboard navigation support.
- Support for deleting rows.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request to improve this project.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- **React Documentation**: [https://reactjs.org/](https://reactjs.org/)
- Inspired by user-provided UI mockup.

---

Enjoy building your customizable dropdown table UI with React!

