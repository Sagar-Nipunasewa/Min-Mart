import CompanyInfo from "./CompanyInfo.tsx";
import {companyLogoSrc, companyLocation, companyName} from "../../constants";
import {Footer, Map} from "../../ui/Atoms";
import {ContactForm} from "../../ui/Components";
import {Divider} from "antd";
import {CompanyLogo} from "../../ui/Molecules";

function ContactUs () {
    return (
        <div className={"flex flex-col justify-center items-center max-w-full w-[800px]  mx-auto px-[25px]  pb-[1rem]  md:pb-[20px]"}>
           <CompanyLogo size="medium" className="mt-[35px] mb-[20px]" companyLogoSrc={ companyLogoSrc }/>
            <CompanyInfo companyName={companyName} />
            <Map companyLocation={companyLocation} />
            <ContactForm />
            <Divider rootClassName="my-5 bg-gray-200 " />
            <Footer />
        </div>
    )
}

export default ContactUs;
