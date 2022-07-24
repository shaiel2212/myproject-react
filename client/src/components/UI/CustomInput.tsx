import React, { ChangeEventHandler } from "react";
type ICustomInput = {
  onChange:  React.ChangeEventHandler<HTMLInputElement> | undefined
  name: string;
  type: string;
  placeholder: string;
  label: string;
};

const CustomInput = ({
  onChange,
  name,
  type,
  placeholder,
  label,
}: ICustomInput) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomInput;
