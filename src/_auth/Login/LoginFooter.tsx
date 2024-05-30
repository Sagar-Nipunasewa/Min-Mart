import {Link} from "react-router-dom";

function LoginFooter() {
    return (
        <>
            <div className="w-full flex justify-center items-center space-x-3 divide-x-2 mt-[18.24px] mb-[9.12px] ">
                <Link
                    to="/contact-us"
                    className="text-blue-500 text-[15px] "
                >
                    Contact Us
                </Link>

                <Link
                    to="/privacypolicy"
                    className="text-blue-500 text-[15px] pl-3 "
                >
                    Privacy Policy
                </Link>
            </div>
            <div
                className="w-full mb-[2rem] flex space-x-4 items-center justify-center"
            >
                <Link
                    to="/forgot-password"
                    className="text-blue-500 text-[15px] "
                >
                    Forgot password?
                </Link>
            </div>
        </>
    )
}

export default LoginFooter;