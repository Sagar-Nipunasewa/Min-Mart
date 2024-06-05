import {Outlet} from "react-router-dom";
import {Sidebar} from "../../Components";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {NavBar} from "../../Molecules";
import {useState} from "react";

function RootLayout () {
    const [collapsed, setCollapsed] = useState(false);
    const userEmail = "example@gmail.com"

    const handleCollapse = () =>{
        setCollapsed(!collapsed)
    }


    return(
        <Layout   >
                <Sidebar  collapsed={collapsed}  />
               <Content>
                   <NavBar userEmail={userEmail} onClick={handleCollapse} />
                   <Outlet/>
               </Content>

        </Layout>
    )
}

export default RootLayout;