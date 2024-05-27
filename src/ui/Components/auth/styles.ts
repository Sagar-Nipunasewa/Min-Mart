import { tv } from "tailwind-variants";

const rootLoginFormVariants = tv({
  base: "h-[100%] w-[400px] max-w-full mx-auto px-[20px] flex flex-col justify-center items-center ",
});

const buttonVariants = tv({
  base: "w-full text-[#fff] px-[30px] py-2.5 border-0 flex justify-center items-center mt-[3px]",
});

export { rootLoginFormVariants, buttonVariants };
