import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './signup.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
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


  // const handleSuccess = (msg) => window.alert(msg);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
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
      username: "",
    });
  };

  return (
    <div className='sign_up'>
      <div className="signup_container">
        <div className="card">
          <h2 className="signup_heading">Sign Up Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="input_container">
              <input
                type="text"
                name="username"
                placeholder=" "
                className="input_field"
                value={username}
                onChange={handleOnChange}
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
                value={email}
                onChange={handleOnChange}
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
                value={password}
                onChange={handleOnChange}
              />
              <label htmlFor="password" className="floating_label">Password</label>
              {/* Password validation code here */}
            </div>
            <div className="login_link">
              Already have an account? &nbsp;&nbsp;<a href="http://localhost:5174/login">Login </a>
            </div>
            <button type="submit" className="submit_button">Submit</button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;




// import './signup.css';

// const Signup = () => {
//   return (
//     <div className='sign_up'>z
//       <div className="signup_container">
//         <div className="card">
//           <h2 >Sign Up Account</h2>
//           <form>
//             <div className="input_container">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder=" "
//                 className="input_field"
//               />
//               <label htmlFor="name" className="floating_label">Name</label>
//               {/* Name validation code here */}
//             </div>
//             <div className="input_container">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder=" "
//                 className="input_field"
//               />
//               <label htmlFor="email" className="floating_label">Email</label>
//               {/* Email validation code here */}
//             </div>
//             <div className="input_container">
//               <input
//                 type="password"
//                 name="password"
//                 placeholder=" "
//                 className="input_field"
//               />
//               <label htmlFor="password" className="floating_label">Password</label>
//               {/* Password validation code here */}
//             </div>
//             <div className="login_link">
//               Already have an account? &nbsp;&nbsp;<a href="http://localhost:5173/login">Login </a>
//             </div>
//             <button type="submit" className="submit_button">Submit</button>
            
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
