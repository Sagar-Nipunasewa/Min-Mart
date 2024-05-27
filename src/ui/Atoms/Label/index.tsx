import { labelVariants } from "./style.ts";
import { type LabelVariantsProps } from "../../../types";

function Label({ size = "medium", text }: LabelVariantsProps) {
  return <label className={labelVariants({ size: size })}>{text}</label>;
}

export default Label;
