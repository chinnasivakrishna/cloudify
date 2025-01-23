import React, { useState } from "react";

const App = () => {
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

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", backgroundColor: "#f4f4f4" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#fff",
        }}
      >
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex", flexDirection: "column" }}>
            <label style={{ marginBottom: "10px", fontWeight: "bold" }}>{row.label}</label>

            <div style={{ marginBottom: "10px" }}>
              <select
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
                onChange={(e) => handleOptionChange(rowIndex, e.target.value)}
              >
                <option value="" disabled selected>
                  Select Options
                </option>
                {["Option 1", "Option 2", "Option 3", "Option 4"].map((option) => (
                  <option
                    key={option}
                    value={option}
                    disabled={row.selectedOptions.includes(option)}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="text"
                placeholder="Add new item"
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleAddCustomOption(rowIndex, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
              <button
                style={{
                  background: "#000",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
                onClick={(e) => {
                  const inputElement = e.target.previousSibling;
                  handleAddCustomOption(rowIndex, inputElement.value);
                  inputElement.value = "";
                }}
              >
                Add
              </button>
            </div>

            <div style={{ marginTop: "10px" }}>
              <p style={{ marginBottom: "5px" }}>Custom Options:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {row.customOptions.map((option) => (
                  <span
                    key={option}
                    style={{
                      padding: "5px 10px",
                      background: "#e0e0e0",
                      borderRadius: "5px",
                      fontSize: "12px",
                    }}
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>

            {row.selectedOptions.length > 0 && (
              <div style={{ marginTop: "10px" }}>
                <p style={{ marginBottom: "5px" }}>Selected Options:</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {row.selectedOptions.map((option) => (
                    <span
                      key={option}
                      style={{
                        padding: "5px 10px",
                        background: "#d0e0ff",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      {option}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        style={{
          background: "#000",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
        onClick={addNewRow}
      >
        Add New Row
      </button>
    </div>
  );
};

export default App;