import React, { useRef, useState } from 'react'
import back from '../assets/images/shoesImages.jpg'
import axios from 'axios';
import { API_URL } from '../core/constants/app.constant';
import { useNavigate } from 'react-router';

const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();
  const navigator = useNavigate();

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'customer' // default role set to 'customer'
  });

  const [serverError, setServerError] = useState('');
  const [successMessage, setsuccessMessage] = useState('');

  const validate = () => {
    let tempErrors = {};
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Email is invalid';
    }

    if (!password) {
      tempErrors.password = 'Password is required';
    } else if (password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = () => {
    validate();
    setFormData({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      role: roleRef.current.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(`${API_URL}/login`, {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          role: roleRef.current.value
        });

        setsuccessMessage("Login successful");
        setServerError("");
        navigator(`/${roleRef.current.value}`);

        console.log('Login successful:', response.data);
      } catch (error) {
        console.log(error.response);
        if (error.response && error.response.data.message) {
          setServerError(error.response.data.message);
          setsuccessMessage("");
        } else {
          setServerError('Something went wrong. Please try again later.');
          setsuccessMessage("");
        }
      }
    } else {
      console.log('Validation failed');
    }
  };

  const scontainer = {
    backdropFilter: "blur(0px)",
    boxShadow: "0px 0px 30px rgba(227,228,237,0.37)",
    border: " 2px solid rgba(255,255,255,0.18)"
  };

  return (
    <div className=" min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${back})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
      <div className="max-w-md w-full p-4 rounded-lg shadow-md" style={scontainer}>
        <h2 className="animate__heartBeat text-white text-2xl font-bold mb-6 text-center">Login</h2>
        {serverError && <p className="text-white text-xl mb-4">{serverError}</p>}
        {successMessage && <p className="text-white text-xl mb-4">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-semibold">Enter email</label>
            <input id="email" type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring" placeholder="Enter your email"
              ref={emailRef}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red text-xl">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-white font-semibold">Password</label>
            <input id="password" type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring" placeholder="Enter your Password"
              ref={passwordRef}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red text-xl">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-white font-semibold">Role</label>
            <select id="role" ref={roleRef} onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring">
              <option value="customer">Customer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-orange text-white py-2 rounded-full hover:bg-customOrange">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React, { useEffect, useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [remember, setRemember] = useState(false);

//   useEffect(() => {

//   }, [])
//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log({ email, password, remember });
//     // Add your login logic here
//   };

//   return (
//     <div
//       className="text-white bg-blue-400  bg-cover h-fit bg-no-repeat"
//       style={{
//         backgroundImage: `url('public/shoesImages.jpg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh', // Full height of the laptop screen
//         width: '100vw',  // Full width of the screen
//         // For centering content if needed
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}
//     >
//       <form onSubmit={handleLogin}>
//         <div className="h-screen ml-80 flex items-center bg-transparent">
//           <div className="bg-opacity-60 backdrop-blur-lg px-8 py-10 rounded-md border">
//             <h2 className="text-3xl text-center mb-5 font-semibold">Login</h2>
//             <div className="flex items-center border-b mb-3">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="placeholder-white py-2 outline-none bg-inherit w-64 bg-transparent"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <i className="ri-mail-line text-white-400"></i>
//             </div>
//             <div className="flex items-center border-b mb-3">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="placeholder-white py-2 outline-none bg-inherit w-64 bg-transparent"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <i className="ri-lock-line text-white"></i>
//             </div>
//             <div className="flex items-center justify-between text-xs mb-6">
//               <div className="flex items-center gap-1">
//                 <input
//                   type="checkbox"
//                   checked={remember}
//                   onChange={(e) => setRemember(e.target.checked)}
//                 />
//                 <p>Remember password</p>
//               </div>
//               <a href="#" className="text-white text-sm ">Forget password?</a>
//             </div>
//             <div className="bg-white hover:bg-orange rounded-md text-black text-xl py-2 text-center mb-5 font-semibold">
//               <button type="submit">Login</button>
//             </div>
//             <div className="text-sm text-center">
//               Don't have an account? <a href="/register" className="text-white text-sm">Register</a>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div >
//   );
// };

// export default Login;
