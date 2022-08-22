import { Link } from "react-router-dom";
import  "./Login.css"
export default function Login() {
  return (
    <div className="center login" >
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
         
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
         
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          Not a member? <Link to="/singup">Signup</Link>
        </div>
      </form>
    </div>
  );
}
