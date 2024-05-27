import { tv } from "tailwind-variants";

const formInputItemVariants = tv({
  base: " mb-[1.5rem] ",
});

const inputFieldVariants = tv({
  base: "border border-gray-300 p-[7.5px] w-[360px]  text-[1rem] ",
});

export { formInputItemVariants, inputFieldVariants };
