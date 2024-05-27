import { Form, Input } from "antd";
import { formInputItemVariants, inputFieldVariants } from "./styles.ts";
import { type FormInputProps } from "../../../types";
import { Label } from "../../Atoms";
import { isEmpty } from "../../../utils";

function FormInputItem({
  name,
  required,
  message,
  type,
  placeholder,
  autoComplete,
  label: text,
}: FormInputProps) {
  return (
    <Form.Item
      name={name}
      rules={[{ required, message }]}
      className={formInputItemVariants()}
    >
      {!isEmpty(text) && <Label text={text} />}
      {type === "email" || type === "text" ? (
        <Input
          size={"large"}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={inputFieldVariants()}
        />
      ) : null}
      {type === "password" ? (
        <Input.Password
          size={"large"}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={inputFieldVariants()}
        />
      ) : null}
    </Form.Item>
  );
}

export default FormInputItem;
