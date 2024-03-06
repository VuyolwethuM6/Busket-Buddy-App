import './login.css';
import login_back from "../../assets/login-background.png"
import google_icon from '../../assets/icons/google.svg'

const Login = () => {
  return (
    <div className="page_container" style={{ backgroundImage: `url(${login_back})` }}>
      <div className="card">
        <div className="form_container">
          <h2>Login Account</h2>
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
              />

            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit">Submit</button>

            <span className="forgot_password">
              Forgot password?
            </span>

          </form>
          <div className="google_login_container">
              <img src={google_icon} alt="Google icon" style={{ width: '110px', height:'50px'}}/>
              <span> Login with Google</span>
          </div>

          <div className="dont_have_account">
            Don&apos;t have an account? <a href="#" className="signup_link">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
