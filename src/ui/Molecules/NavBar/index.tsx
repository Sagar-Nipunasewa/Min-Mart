import {Button, Flex, Layout} from "antd";
import {Header} from "antd/es/layout/layout";
import {GiHamburgerMenu} from "react-icons/gi";
import Gravatar from "react-gravatar";
import {Link} from "react-router-dom";
import NotificationBell from "../../Atoms/NotificationBell";
import type{NavBarProps} from "../../../types";
import {AntdConfigProvider} from "../../utils";


function NavBar({userEmail,onClick} : NavBarProps) {
    return (
        <Layout  >
            <Header className="bg-white h-14 border shadow-sm flex items-center justify-between px-5">
              <Flex>
                 <AntdConfigProvider buttonHoverBg="none" buttonHoverColor="none" buttonColor="black" buttonShadow="none" buttonHoverBorderColor="none" buttonBorderColor="none">
                         <Button onClick={onClick} icon={<GiHamburgerMenu size={25}/>}/>
                    </AntdConfigProvider>

              </Flex>
                <Flex align="center" justify="center"  >
                    <Flex dir="row" align="center">
                        <p className="hidden lg:block">{userEmail}</p>
                        <Gravatar
                            email={userEmail}
                            size={35}
                            className="ml-4 p-0.5  rounded-full ring-1 ring-gray-400 "
                        />
                    </Flex>
                    <Link to="/admin/notification"><NotificationBell/></Link>
                </Flex>
            </Header>
        </Layout>
    );
}

export default NavBar;