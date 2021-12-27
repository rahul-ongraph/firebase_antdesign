import React from "react";
import { Input } from "antd";
import "../Input/InputField.css";

const InputField = props => {
  const {placeholder,onChange} = props
  return (
      <div>
      <Input
        className=".input_Field" 
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default InputField;
