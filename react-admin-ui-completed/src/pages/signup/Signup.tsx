import './signup.scss'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="background">
      <div className="wrapper">
        <h1>Signup</h1>
        <form className="form">
          <div className="name">
            <div className="nameBox">
              <label htmlFor="name"></label>
              <input id="name" type="text" placeholder="name" className="nameInput"></input>
            </div>
            <img src="user-icon.png" alt="" className="nameIcon" />
          </div>
          <div className="email">
            <div className="emailBox">
              <label htmlFor="email"></label>
              <input id="email" type="email" placeholder="email" className="emailInput"></input>
            </div>
            <img src="email-icon.png" alt="" className="emailIcon" />
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
            {/* <p className="rememberPass"><a href="#">Forgot Password?</a></p> */}
          </div>
          <button className="login">Signup</button>
          <div className="noAccount">Already have an account? <b><Link to = "/login">Login</Link></b></div>
        </form>
      </div>
    </div>
  )
}

export default Signup