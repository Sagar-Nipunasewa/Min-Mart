import type{FormInputProps, TextAreaProps} from "../types";

export default function isTextArea(arg:FormInputProps ): arg is TextAreaProps {
    return arg.type === "textarea";
}