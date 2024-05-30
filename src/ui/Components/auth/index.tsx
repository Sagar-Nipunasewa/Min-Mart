import { Button, Form } from "antd";
import { type LoginFormValues } from "../../../types";
import { FormInputItem } from "../../Molecules";

function LoginForm() {
  const onFinish = (value: LoginFormValues) => {
    console.log(value);
  };

  return (
    <Form
      layout="vertical"
      name="login"
      onFinish={onFinish}
      className=" flex flex-col justify-center items-center"
    >
      <FormInputItem
        name="email"
        required
        message="Email is required"
        placeholder="example@example.com"
        type="email"
        label={"Email*"}
      />
      <FormInputItem
        name="password"
        required
        message="Password is required"
        placeholder="Pasword"
        type="password"
        label={"Password*"}
      />
      <Button
        htmlType="submit"
        size={"large"}
        type={"primary"}
        className="w-full text-[#fff] px-[30px] py-2.5 border-0 flex justify-center items-center my-[9px]"
      >
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
