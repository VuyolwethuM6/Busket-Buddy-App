
import './signup.css';

const Signup = () => {
  return (
    <div className='sign_up'>z
      <div className="signup_container">
        <div className="card">
          <h2 >Sign Up Account</h2>
          <form>
            <div className="input_container">
              <input
                type="text"
                name="name"
                placeholder=" "
                className="input_field"
              />
              <label htmlFor="name" className="floating_label">Name</label>
              {/* Name validation code here */}
            </div>
            <div className="input_container">
              <input
                type="email"
                name="email"
                placeholder=" "
                className="input_field"
              />
              <label htmlFor="email" className="floating_label">Email</label>
              {/* Email validation code here */}
            </div>
            <div className="input_container">
              <input
                type="password"
                name="password"
                placeholder=" "
                className="input_field"
              />
              <label htmlFor="password" className="floating_label">Password</label>
              {/* Password validation code here */}
            </div>
            <div className="login_link">
              Already have an account? &nbsp;&nbsp;<a href="http://localhost:5173/login">Login </a>
            </div>
            <button type="submit" className="submit_button">Submit</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
