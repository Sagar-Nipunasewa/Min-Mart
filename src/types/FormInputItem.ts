import type React from "react";

interface FormProps {
  style?: React.CSSProperties;
  rootStyle?: React.CSSProperties;
  labelClassName?: string;
  name: string;
  required?: boolean;
  message?: string;
  label?: string;
    placeholder: string;
    autoComplete?: string;
    size?: "large" | "middle" | "small";
}

interface InputProps {
  type: "email" | "password" | "text";
}

export interface TextAreaProps {
  type: "textarea";
  rows?: number;
  cols?: number;
}

export type FormInputProps = InputProps | TextAreaProps;

export type FormInputItemProps = FormProps & (InputProps | TextAreaProps);

