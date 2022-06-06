import React, { FC } from "react";
import { ButtonProps } from "./Button.type";

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
