import { Form, Input } from "antd";
import { formInputItemVariants, inputFieldVariants } from "./styles.ts";
import type {FormInputItemProps, TextAreaProps} from "../../../types";
import { Label } from "../../Atoms";
import { isEmpty,isTextArea } from "../../../utils";

function FormInputItem({
  name,
  required,
  message,
    type,
  label: text,
    rootStyle,
    style,
    labelClassName,
    placeholder,
    autoComplete,
    size,
}: FormInputItemProps) {
    let arg : TextAreaProps ;
  return (
    <Form.Item
      name={name}
      rules={[{ required, message }]}
      className={formInputItemVariants()}
      style={rootStyle}
    >
      <div>
        {!isEmpty(text) && <Label labelClassName={labelClassName}  text={text} />}
        {type === "email" || type === "text"  ? (
            <Input
                size={size}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className={inputFieldVariants()}
                style={style}
            />
        ) : null}
        {type === "password" ? (
            <Input.Password
                size={size}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className={inputFieldVariants()}
                style={style}
            />
        ) : null}
        {
          type === "textarea" && isTextArea( arg = {type: "textarea"}  ) ? (
              <Input.TextArea className={inputFieldVariants()} style={style} size={size} rows={arg.rows} cols={arg.cols}  placeholder={placeholder} autoComplete={autoComplete} />
          ) : null
        }
      </div>
    </Form.Item>
  );
}

export default FormInputItem;
