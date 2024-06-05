import {Outlet} from "react-router-dom";
import {Sidebar} from "../../Components";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import {NavBar} from "../../Molecules";
import {useState} from "react";
import {Footer} from "../../Atoms";

function RootLayout () {
    const [collapsed, setCollapsed] = useState(false);
    const userEmail = "example@gmail.com"

    const handleCollapse = () =>{
        setCollapsed(!collapsed)
    }


    return(
        <Layout>
                <Sidebar  collapsed={collapsed}  />
               <Layout >
                   <Content>
                       <NavBar userEmail={userEmail} onClick={handleCollapse} />
                       <Outlet/>
                   </Content>
                       <Footer className="my-4" />
               </Layout>
        </Layout>
    )
}

export default RootLayout;