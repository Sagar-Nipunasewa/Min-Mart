import {FaCartShopping} from "react-icons/fa6";
import {FaBook, FaDownload, FaGift, FaProductHunt, FaStore, FaTags} from "react-icons/fa";
import { FaUsers, FaFile } from "react-icons/fa6";
import {IoSettings} from "react-icons/io5";
import type {MenuItem} from "../../types";


export const SideBarMenu: MenuItem[] = [
    {
        key: "orders",
        label: "Orders",
        icon: <FaCartShopping />,
    },{
        key: "products",
        label: "Products",
        icon: <FaProductHunt />,
    },

    {
        key: "categories",
        label: "Categories",
        icon: <FaTags />,
    },

    {
        key: "offers",
        label: "Offers",
        icon: <FaGift />,
    },

    {
        key: "stores",
        label: "Stores",
        icon: <FaStore />,
    },

    {
        key: "store-users",
        label: "Store Users",
        icon: <FaUsers />,
    },
    {
        key: "admin-users",
        label: "Admin Users",
        icon: <FaUsers />,
    },
    {
        key: "transaction-history",
        label: "Transaction History",
        icon: <FaFile />,
    },
    {
        key: "settings",
        label: "Settings",
        icon: <IoSettings />,
    },
    {
        type: "divider",
        style: {background: "#3C4D6F" , padding: "1px", margin: "10px 0"}
    },
    {
        key: "admin-docs",
        label: "Admin Docs",
        icon: <FaBook />,
    },
    {
        key: "mobile-app-docs",
        label: "Mobile App Docs",
        icon: <FaBook />,
    },
    {
        key: "download-app",
        label: "Download App",
        icon: <FaDownload />,
    }
]
