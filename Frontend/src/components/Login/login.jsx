import './login.css';
import google_icon from '../../assets/icons/google.svg';

const Login = () => {
  return (
    <div className="page_container">
      <div className="card">
        <div className="form_container">
          <h2>Login Account</h2>
          <form>
            <div className="input_container">
              <input
                type="email"
                name="email"
                placeholder=" "
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input_container">
              <input
                type="password"
                name="password"
                placeholder=" "
              />
              <label htmlFor="password">Password</label>
            </div>
            <button type="submit">Submit</button>

            <p className="forgot_password">
              Forgot password?
            </p>

          </form>
          <div className="google_login_container">
            <img src={google_icon} alt="Google icon" style={{ width: '110px', height:'50px'}}/>
            <span> Login with Google</span>
          </div>

          <div className="dont_have_account">
            Don&apos;t have an account? <a href="http://localhost:5173/signup" className="signup_link">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
