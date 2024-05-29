import type {CompanyInfoProps} from "../../types";

function CompanyInfo ({companyName}: CompanyInfoProps) {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <h2 className="text-[40px]  mb-[25px] text-center w-full">
                Introducing our {companyName}
            </h2>
            <p className="text-justify text-gray-500 text-sm ">
                The ultimate solution for streamlining your order management
                process. Simplify your business operations with a user-friendly
                interface designed exclusively for swiftly capturing and
                processing small orders. Say goodbye to complexity and welcome
                efficiency as you effortlessly record customer requests, track
                inventory, and manage transactions, all in one place. Elevate your
                customer service and enhance your productivity with our focused,
                single-feature app, making small order taking a breeze. Experience
                the future of seamless order management – download the{" "}
                {companyName} today.
            </p>
        </div>
    )
}

export default CompanyInfo;