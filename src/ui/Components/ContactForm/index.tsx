import {Button, Form} from "antd";
import {FormInputItem} from "../../Molecules";
import type {ContactFormValueProps} from "../../../types";

function Index (){
    const onFinish = (value: ContactFormValueProps) => {
        console.log(value);
    };
    return (
        <div className="mt-14 mb-[10px] w-full">
            <h2 className="text-[30px]  text-center mb-5 ">
                Contact Us
            </h2>
                    <Form
                        name="login"
                        onFinish={onFinish}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 ">
                            <FormInputItem
                                name="firstName"
                                type="text"
                                label="First Name*"
                                autoComplete="off"
                                required={true}
                                message="First Name is required"
                                style={{width: "100%"}}
                                placeholder={"Enter Your First Name"}
                                labelClassName="text-black text-sm md:text-[15px]"
                            />
                            <FormInputItem
                                name="lastName"
                                type="text"
                                label="Last Name*"
                                autoComplete="off"
                                required={true}
                                style={{width: "100%"}}
                                message="Last Name is required"
                                placeholder={"Enter Your Last Name"}
                                labelClassName="text-black text-sm md:text-[15px]"
                            />

                            <FormInputItem
                                name="email"
                                type="email"
                                label="Email*"
                                style={{width: "100%"}}
                                autoComplete="off"
                                required={true}
                                message="Email is required"
                                placeholder={"example@gmail.com"}
                                labelClassName="text-black text-sm md:text-[15px]"
                            />
                            <FormInputItem
                                name="phoneNumber"
                                type="text"
                                label="Phone Number*"
                                autoComplete="off"
                                required={true}
                                style={{width: "100%"}}
                                message="Phone number is required"
                                placeholder={"98********"}
                                labelClassName="text-black text-sm md:text-[15px]"
                            />

                        </div>
                            <FormInputItem
                                name="message"
                                type="textarea"
                                label=" Message*"
                                autoComplete="off"
                                required={true}
                                style={{width: "100%"}}
                                message="Message is required"
                                placeholder={"Enter Message..."}
                                labelClassName="text-black text-sm md:text-[15px]"
                                rows={4}
                                cols={10}
                            />

                        <Button
                            htmlType="submit"
                            className="flex justify-center items-center border-none rounded w-full md:w-[14%] text-xs md:text-sm mt-3 md:mt-4  md:py-[20px]"
                            type="primary"
                        >
                            Submit
                        </Button>

                    </Form>
        </div>
    )
}

export default Index;