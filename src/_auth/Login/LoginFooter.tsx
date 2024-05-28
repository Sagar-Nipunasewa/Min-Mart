import {Link} from "react-router-dom";
import {loginFooterForgotPasswordVariants, loginFooterLinkVariants, loginFooterVariants} from "./styles.ts";

function LoginFooter() {
    return (
        <>
            <div className={loginFooterVariants()}>
                <Link
                    to="/contact-us"
                    className={loginFooterLinkVariants()}
                >
                    Contact Us
                </Link>

                <Link
                    to="/privacypolicy"
                    className={`${loginFooterLinkVariants()} pl-3`}
                >
                    Privacy Policy
                </Link>
            </div>
            <div
                className={loginFooterForgotPasswordVariants()}
            >
                <Link
                    to="/forgot-password"
                    className={loginFooterLinkVariants()}
                >
                    Forgot password?
                </Link>
            </div>
        </>
    )
}

export default LoginFooter;