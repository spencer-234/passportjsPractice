import "./login.scss";
import Google from "../../assets/social_icons/google.png";
import Github from "../../assets/social_icons/github.png";
import Facebook from "../../assets/social_icons/facebook.png";
import { server_url } from "../../server/server_url";

export default function Login() {

  const google = () => {
    window.open(`${server_url}auth/google`, "_self");
  }

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={Facebook} alt="" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={Github} alt="" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line"></div>
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  )
}
