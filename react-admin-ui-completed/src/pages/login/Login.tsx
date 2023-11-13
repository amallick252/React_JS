import "./login.scss";
import { useId } from "react";
const Login = () => {
  const id = useId();
  return (
    <div className="background">
      <div className="wrapper">
        <h1>Login</h1>
        <form className="form">
          <div className="uname">
            <div className="userNameBox">
              <label htmlFor="username"></label>
              <input id="username" type="text" placeholder="username" className="userInput"></input>
            </div>
            <img src="user-icon.svg" alt="" className="userNameIcon" />
          </div>
          <div className="pass">
            <div className="passBox">
              <label htmlFor="password"></label>
              <input id="password" type="text" placeholder="password" className="passInput"></input>
            </div>
            <img src="lock-icon.svg" alt="" className="passwordIcon" />
          </div>
          <div className="forgetPass">
            <div className="textBox">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">  Remember Me</label>
            </div>
            <p className="rememberPass"><a href="#">Forgot Password?</a></p>
          </div>
          <button className="login">Login</button>
          <div className="noAccount">Dont have an account? <a href="#"><b>Register</b></a></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
