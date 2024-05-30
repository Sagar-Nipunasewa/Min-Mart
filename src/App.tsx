import {Route, Routes} from "react-router-dom";
import Login from "./_auth/Login";
import {Home, ContactUs, ForgetPassword, PrivacyPolicy} from "./pages";

function App() {

  return (
    <main className="flex min-h-screen ">
        <Routes>
            <Route path={"login"} element={<Login/>} />

            <Route path={"contact-us"} element={<ContactUs/>} />
            <Route path={"privacypolicy"} element={<PrivacyPolicy/>} />
            <Route path={"forgot-password"} element={<ForgetPassword/>} />


            <Route index element={<Home/>} />
        </Routes>
    </main>

  );
}

export default App
