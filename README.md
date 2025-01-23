<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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

>>>>>>> 98668a1b7b7535b44b8c5eefd1d793c28f9b6132
