import {Route, Routes} from "react-router-dom";
import Login from "./_auth/Login";
import { ContactUs, ForgetPassword, PrivacyPolicy} from "./pages";
import {RootLayout} from "./ui/layouts";
import {
    Categories,
    Notification,
    Offers,
    Orders,
    Products,
    Settings,
    StoreUsers,
    TransactionHistory,
    Users
} from "./pages/admin";
import Stores from "./pages/admin/stores";

function App() {

  return (
    <main className="flex min-h-screen ">
        <Routes>
            <Route path={"login"} element={<Login/>} />

            <Route path={"contact-us"} element={<ContactUs/>} />
            <Route path={"privacypolicy"} element={<PrivacyPolicy/>} />
            <Route path={"forgot-password"} element={<ForgetPassword/>} />


            <Route element={<RootLayout/>} >
                <Route index element={<Orders/>} />
                <Route path="/admin/orders" element={<Orders/>} />
                <Route path={"/admin/offers"} element={<Offers/>} />
                <Route path={"/admin/products"} element={<Products/>} />
                <Route path={"/admin/settings"} element={<Settings/>} />
                <Route path={"/admin/stores"} element={<Stores/>} />
                <Route path={"/admin/admin-users"} element={<Users/>} />
                <Route path={"/admin/transaction-history"} element={<TransactionHistory/>} />
                <Route path={"/admin/notification"} element={<Notification/>} />
                <Route path={"/admin/categories"} element={<Categories/>} />
                <Route path={"/admin/store-users"} element={<StoreUsers/>} />
            </Route>
        </Routes>
    </main>

  );
}

export default App
