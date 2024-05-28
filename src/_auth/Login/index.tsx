import { LoginForm } from "../../ui/Components";
import LoginHeader from "./LoginHeader.tsx";
import LoginFooter from "./LoginFooter.tsx";
import {loginPageVariants} from "./styles.ts";

function Login() {
    const src = "https://firebasestorage.googleapis.com/v0/b/e-mart-clone-for-interns.appspot.com/o/BrandLogo%2Fnipuna_sewa_logo.png?alt=media&token=b390bdff-fa17-4040-8f07-ab35af32544e"
  return (
      <div className={loginPageVariants()}>
          <LoginHeader src={src}/>
          <LoginForm/>
          <LoginFooter/>
      </div>
  );
}

export default Login;
