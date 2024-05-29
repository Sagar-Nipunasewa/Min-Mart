import { tv } from "tailwind-variants";

const formInputItemVariants = tv({
  base: "mb-[10px] md:mb-[14px] ",
});

const inputFieldVariants = tv({
  base: "border border-gray-300 p-[5px] md:p-[7.5px] w-[360px] text-xs sm:text-sm md:text-base rounded ",
});

export { formInputItemVariants, inputFieldVariants };
