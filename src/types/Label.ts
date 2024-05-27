import { type VariantProps } from "tailwind-variants";
import { type labelVariants } from "../ui/Atoms/Label/style.ts";

type LabelVariants = VariantProps<typeof labelVariants>;

export interface LabelVariantsProps extends LabelVariants {
  text: string;
}
