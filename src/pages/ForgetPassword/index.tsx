import ForgetPasswordForm from "../../ui/Components/ForgetPasswordForm";
import { CompanyLogo } from "../../ui/Molecules";
import { companyInfo } from "../../constants";
import { useNavigate } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

function ForgetPassword() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1600px] w-full h-[100vh] px-[1rem] flex flex-col justify-center items-center mx-auto relative ">
      <CompanyLogo companyLogoSrc={companyInfo.company_logoSrc} size="large" />
      <ForgetPasswordForm />

      <LeftOutlined
        onClick={() => navigate("/")}
        className="absolute top-[2rem] left-[2rem] cursor-pointer text-[1.4rem] p-2 bg-gray-100 hover:bg-gray-200 duration-150 grid place-items-center rounded-full"
      />
    </div>
  );
}

export default ForgetPassword;
