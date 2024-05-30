import { Button, Form } from "antd";
import { buttonVariants, rootLoginFormVariants } from "./styles.ts";
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
      className={rootLoginFormVariants()}
    >
      <FormInputItem
        name="email"
        required
        message="Email is required"
        placeholder="example@example.com"
        type="email"
        autoComplete="off"
        label={"Email*"}
      />
      <FormInputItem
        name="password"
        required
        message="Password is required"
        placeholder="Pasword"
        type="password"
        autoComplete="off"
        label={"Password*"}
      />
      <Button
        htmlType="submit"
        size={"large"}
        type={"primary"}
        className={buttonVariants()}
      >
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
