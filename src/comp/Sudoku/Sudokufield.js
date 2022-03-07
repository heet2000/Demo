import React from "react";

const Sudokufield= (props)=> {
  const handleChange = e => {
    const value = "" ? null : parseInt(e.target.value);

    props.onChange({ ...props.field, value }, e);
  };
    return (
      <input
        className="field"
        value={props.field.value || ""}
        answered={props.field.answered}
        readOnly={props.field.readonly}
        onChange={handleChange}
      />
    );
  }

export default Sudokufield;
