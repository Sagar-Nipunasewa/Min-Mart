import { Form, Input } from "antd";
import type {FormInputItemProps, TextAreaProps} from "../../../types";
import { Label } from "../../Atoms";
import { isEmpty, isTextArea } from "../../../utils";

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
  //To-do: Fix the usage of arg
    const arg : TextAreaProps = {type:"textarea" ,rows: 0, cols: 0};
  return (
    <Form.Item
      name={name}
      rules={[{ required, message }]}
      className="mb-[10px] md:mb-[14px]"
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
                className="border border-gray-300 p-[5px] md:p-[7.5px] w-[360px] text-xs sm:text-sm md:text-base rounded"
                style={style}
            />
        ) : null}
        {type === "password" ? (
            <Input.Password
                size={size}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className="border border-gray-300 p-[5px] md:p-[7.5px] w-[360px] text-xs sm:text-sm md:text-base rounded "
                style={style}
            />
        ) : null}
        {
           isTextArea( {type} ) ? (
              <Input.TextArea className="border border-gray-300 p-[5px] md:p-[7.5px] w-[360px] text-xs sm:text-sm md:text-base rounded " style={style} size={size} rows={arg.rows} cols={arg.cols}  placeholder={placeholder} autoComplete={autoComplete} />
          ) : null
        }
      </div>
    </Form.Item>
  );
}

export default FormInputItem;
