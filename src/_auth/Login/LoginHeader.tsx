import {CompanyLogo} from "../../ui/Molecules";

function LoginHeader ({src}: {src: string}) {
    return (
        <div className="text-center mb-[50px] flex flex-col items-center">
            <CompanyLogo companyLogoSrc={src} className="mb-[20px]" size="large" />
            <span className="text-[18px]">Please, log in to Admin Panel.</span>
        </div>
    )
}

export default LoginHeader;