export interface FormInputProps {
  name: string;
  required?: boolean;
  message?: string;
  label?: string;
  type: "email" | "password" | "text";
  placeholder?: string;
  autoComplete?: "on" | "off";
}
