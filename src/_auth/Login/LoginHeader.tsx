import {Image} from "antd";
import {loginHeaderVariants} from "./styles.ts";

function LoginHeader ({src}: {src: string}) {
    return (
        <div className={loginHeaderVariants()}>
            <Image
                loading="lazy"
                src={src}
                alt="Company-Logo"
                style={{width: "200px", height: "200px"}}
                className="rounded mb-[20px]"
                preview={false}
            />
            <span className="text-[18px]">Please, log in to Admin Panel.</span>
        </div>
    )
}

export default LoginHeader;