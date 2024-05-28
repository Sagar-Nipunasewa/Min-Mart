import { tv } from "tailwind-variants";

const rootLoginFormVariants = tv({
  base: " flex flex-col justify-center items-center",
});

const buttonVariants = tv({
  base: "w-full text-[#fff] px-[30px] py-2.5 border-0 flex justify-center items-center my-[9px]",
});

export { rootLoginFormVariants, buttonVariants };
