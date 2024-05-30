import { Button, Form } from "antd";
import { FormInputItem } from "../../Molecules";
import type { ContactFormValueProps } from "../../../types";

function ForgetPasswordForm() {
  const onFinish = (value: ContactFormValueProps) => {
    console.log(value);
  };
  return (
    <div className="sm:p-4 w-full flex flex-col justify-center items-center   ">
      <div className="w-full text-center mb-8">
        <h2 className="text-center text-xl md:text-[1.65rem]">
          Forgot Password?
        </h2>
        <p className="text-[11px] md:mt-2 md:text-[15px] text-gray-500">
          Please, provide the email with which you created account.
        </p>
      </div>

      <Form
        name="forgetPassword"
        onFinish={onFinish}
        className="sm:px-4 w-full  sm:w-[28rem] "
      >
        <div className="">
          <FormInputItem
            name="email"
            placeholder="example@gmail.com"
            autoComplete="off"
            type="email"
            label="Email*"
            required
            style={{ width: "100%" }}
            labelClassName=" text-xs md:text-[15px] mb-1"
          />
          <Button
            type="primary"
            htmlType="submit"
            size="middle"
            className="w-full rounded text-xs sm:text-base sm:py-4 md:py-5 flex items-center justify-center "
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ForgetPasswordForm;
