import Sider from "antd/es/layout/Sider";
import {Button, Flex, Menu} from "antd";
import {CompanyLogo} from "../../Molecules";
import {companyLogoSrc, SideBarMenu} from "../../../constants";
import {FiLogOut} from "react-icons/fi";
import {useLocation, useNavigate} from "react-router-dom";
import {AntdConfigProvider} from "../../utils";
import {SidebarProps} from "../../../types";


function Sidebar({collapsed}: SidebarProps) {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    return (
      <div className={""}>
          <Sider
              className={""}
              collapsedWidth={90}
              width="17.4vw"
              style={{background: "#27374D"}}
              trigger={null} collapsible collapsed={collapsed}
          >
              <AntdConfigProvider
                  menuDarkItemBg="#27374D"
                  menuDarkItemHoverBg="#3C4D6F"
                  menuDarkItemSelectedBg="#3C4D6F"
                  menuIconMarginInlineEnd={18}
                  menuDarkItemColor="white"
                  menuItemMarginBlock={2}
                  buttonBg="#3C4D6F"
                  buttonHoverBg="#3C4D6F"
                  buttonColor="white"
                  buttonHoverColor="white"
                  menuCollapsedWidth={80}
                  menuItemMarginInline={collapsed ? 20 : 4}
              >
                  <div
                      className={collapsed ? "py-[10px] h-[100vh] " : "py-[10px] h-[100vh] flex flex-col items-center justify-between"}
                  >
                      <Flex
                          align="center"
                          justify="center"
                          className="h-[126px]"
                      >
                          <CompanyLogo
                              companyLogoSrc={companyLogoSrc}
                              className={collapsed ? "size-10" : "size-16"}
                          />
                      </Flex>

                      <Menu
                          className=" w-[87%] h-[80vh] overflow-y-scroll text-[15px] "
                          theme="dark"
                          defaultSelectedKeys={[pathname.split("/")[2]]}
                          defaultOpenKeys={['sub1']}
                          items={SideBarMenu}
                          onClick={(e) => navigate("/admin/" + e.key)}
                      />


                      <Button
                          size="large"
                          icon={<FiLogOut/>}
                          className="w-[85%] mt-4  border-0 flex justify-center mx-auto items-center gap-x-2 py-3 rounded"
                      >
                          {collapsed ? "" : "Logout"}
                      </Button>
                  </div>
              </AntdConfigProvider>

          </Sider>
      </div>
    )
}

export default Sidebar;