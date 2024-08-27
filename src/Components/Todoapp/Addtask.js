import React, { useState } from "react";
const Addtask = ({addTask}) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    addTask(value);
    setValue("")
  };
  return (
    <>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={value}
          placeholder="Add your task Dr Riya"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={addItem} className="add-btn">
          Dr+
        </button>
      </div>
    </>
  );
};

export default Addtask;
