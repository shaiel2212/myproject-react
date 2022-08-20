import React from "react";
import { Button } from "react-bootstrap";
import { IVacation } from "../../interface/Vacation.interface";
interface ButtonProps {
  onClick: any;
  title: string;
}
const ButtonEl = ({ onClick, title }: ButtonProps) => {
  return <Button onClick={onClick}>{title}</Button>;
};

export default ButtonEl;
