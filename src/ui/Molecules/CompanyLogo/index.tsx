import {Image} from "antd";
import type {CompanyLogoProps} from "../../../types";
import companyLogoVariants from "./styles.ts";

function CompanyLogo ({size,className,companyLogoSrc}: CompanyLogoProps) {
    return (
        <Image src={companyLogoSrc} className=" rounded" preview={false}  rootClassName={companyLogoVariants({size, className})}  />
    )
}

export default CompanyLogo;