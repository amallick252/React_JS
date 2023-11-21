import "./login.scss";
import { Link,useNavigate } from "react-router-dom";
const Login = () => {
  const navigate= useNavigate()

  const handleSubmit= ()=>{
    console.log('abc')
    navigate('/')
  }


  return (
    <div className="background">
      <div className="wrapper">
        <h1>Login</h1>
        <form className="form" onSubmit={handleSubmit()}>
          <div className="uname">
            <div className="userNameBox">
              <label htmlFor="username"></label>
              <input id="username" type="text" placeholder="username" className="userInput"></input>
            </div>
            <img src="user-icon.png" alt="" className="userNameIcon" />
          </div>
          <div className="pass">
            <div className="passBox">
              <label htmlFor="password"></label>
              <input id="password" type="text" placeholder="password" className="passInput"></input>
            </div>
            <img src="lock-icon.png" alt="" className="passwordIcon" />
          </div>
          <div className="forgetPass">
            <div className="textBox">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">  Remember Me</label>
            </div>
            <p className="rememberPass"><a href="#">Forgot Password?</a></p>
          </div>
          <button className="login" type="submit">Login</button>
          <div className="noAccount">Dont have an account? <b><Link to = "/signup">Register</Link></b></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
