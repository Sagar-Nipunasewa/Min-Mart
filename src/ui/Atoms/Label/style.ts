import { tv } from "tailwind-variants";

const labelVariants = tv({
  base: "text-sm text-gray-500 flex mb-[0.4rem]",
  variants: {
    size: {
      small: "text-xs",
      medium: "text-[15px]",
      large: "text-lg",
    },
  },
});

export { labelVariants };
