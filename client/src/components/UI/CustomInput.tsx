import React, { ChangeEventHandler } from "react";
type ICustomInput = {
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  value?: string;
};

const CustomInput = ({
  onChange,
  name,
  type,
  placeholder,
  label,
  value,
}: ICustomInput) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default CustomInput;
