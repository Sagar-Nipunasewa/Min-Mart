import {Link} from "react-router-dom";
import packageJson from "../../../../package.json";

function Footer () {
    return(
        <footer className=" text-center text-[13.5px] ">
            &copy; {new Date().getFullYear()}. All rights reserved by
            <Link to="https://www.nipunasewa.com/" target="_blank"> Nipuna Prabidhik Sewa v{packageJson.version}</Link>
        </footer>
    )
}

export default Footer;