import { labelVariants } from "./style.ts";
import { type LabelVariantsProps } from "../../../types";

function Label({ size = "medium", text, labelClassName:className }: LabelVariantsProps) {
  return <label className={labelVariants({ size: size, className })}>{text}</label>;
}

export default Label;
