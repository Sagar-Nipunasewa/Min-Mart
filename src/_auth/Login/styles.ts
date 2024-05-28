import {tv} from 'tailwind-variants';

const loginPageVariants = tv({
    base: "h-[100vh] w-[400px] max-w-full mx-auto px-[20px] flex flex-col justify-center items-center ",
})

const loginHeaderVariants = tv({
    base: "text-center mb-[50px] flex flex-col items-center"
});

const loginFooterVariants = tv({
    base: "w-full flex justify-center items-center space-x-3 divide-x-2 mt-[18.24px] mb-[9.12px] "
});

const loginFooterForgotPasswordVariants = tv({
    base: "w-full mb-[2rem] flex space-x-4 items-center justify-center"
});

const loginFooterLinkVariants = tv({
    base: "text-blue-500 text-[15px] "
});


export {
    loginPageVariants,
    loginHeaderVariants,
    loginFooterVariants,
    loginFooterForgotPasswordVariants,
    loginFooterLinkVariants
};