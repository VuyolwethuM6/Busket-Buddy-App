import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import google_icon from '../../assets/icons/google.svg'

const Login = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => toast.error(err, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });


  const handleSuccess = (msg) => toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  // toast.success(msg, {position: "bottom-left", })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      console.log(data);
      // window.alert(data);

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };


  return (
    <div className="page_container">
      <div className="card">
        <div className="form_container">
          <h2>Login Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="input_container">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
              />
            <label htmlFor="email">Email</label>
            </div>
            <div className="input_container">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
              />
             <label htmlFor="password">Password</label>
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
            Don&apos;t have an account? <a href="http://localhost:5173/signup" className="signup_link">Sign up</a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;



// import google_icon from '../../assets/icons/google.svg';

// const Login = () => {
//   return (
//     <div className="page_container">
//       <div className="card">
//         <div className="form_container">
//           <h2>Login Account</h2>
//           <form>
//             <div className="input_container">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder=" "
//               />
//               <label htmlFor="email">Email</label>
//             </div>
//             <div className="input_container">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder=" "
//               />
//               <label htmlFor="password">Password</label>
//             </div>
//             <button type="submit">Submit</button>

//             <p className="forgot_password">
//               Forgot password?
//             </p>

//           </form>
//           <div className="google_login_container">
//             <img src={google_icon} alt="Google icon" style={{ width: '110px', height:'50px'}}/>
//             <span> Login with Google</span>
//           </div>

//           <div className="dont_have_account">
//             Don&apos;t have an account? <a href="http://localhost:5173/signup" className="signup_link">Sign up</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
