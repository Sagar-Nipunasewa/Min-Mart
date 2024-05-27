import {Route, Routes} from "react-router-dom";
import Login from "./_auth/Login";
import Home from "./_root/pages/Home";

function App() {

  return (
    <main className="flex min-h-screen ">
        <Routes>
            <Route path={"login"} element={<Login/>} />

            <Route index element={<Home/>} />
        </Routes>
    </main>

  );
}

export default App
