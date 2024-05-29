import {tv} from "tailwind-variants";

const companyLogoVariants = tv({
    base: "rounded",
    variants:{
        size:{
            small: "h-[100px] w-[100px]",
            medium: "h-[150px] w-[150px]",
            large: "h-[200px] w-[200px]"
        }
    }
});

export default companyLogoVariants;