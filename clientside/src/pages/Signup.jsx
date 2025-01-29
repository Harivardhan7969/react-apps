import React, { useRef, useState } from 'react';
import axios from 'axios';
import back from '../assets/images/wall.jpg';
import { API_URL } from '../core/constants/app.constant';

const Signup = () => {
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [errorMessages, setErrorMessages] = useState({});

  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const errors = {};
    const fullname = fullnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!fullname) {
      errors.fullname = 'Full Name is required';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }


    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };


  const handleFieldChange = (field) => {
    const errors = { ...errorMessages };
    switch (field) {
      case 'fullname':
        const fullname = fullnameRef.current.value;
        if (!fullname) {
          errors.fullname = 'Full Name is required';
        } else {
          delete errors.fullname;
        }
        break;

      case 'email':
        const email = emailRef.current.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
          errors.email = 'Email is required';
        } else if (!emailPattern.test(email)) {
          errors.email = 'Invalid email format';
        } else {
          delete errors.email;
        }
        break;

      case 'password':
        const password = passwordRef.current.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!password) {
          errors.password = 'Password is required';
        } else if (password.length < 6) {
          errors.password = 'Password must be at least 6 characters';
        } else if (!passwordPattern.test(password)) {
          errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
        } else {
          delete errors.password;
        }
        break;

      case 'confirmPassword':
        const confirmPassword = confirmPasswordRef.current.value;
        if (!confirmPassword) {
          errors.confirmPassword = 'Confirm Password is required';
        } else if (passwordRef.current.value !== confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
        } else {
          delete errors.confirmPassword;
        }
        break;

      default:
        break;
    }

    setErrorMessages(errors);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      try {
        console.log("inside try");
        const response = await axios.post(`${API_URL}/register`, {
          fullname: fullnameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value
        });
        console.log(response.data);
        if (response.data) {
          setSuccessMessage('User registered successfully!!!!!!!!!');
          setErrorMessages({});
        }

      } catch (error) {

        if (error.response && error.response.data) {
          console.log(error.response.data);
          // setErrorMessages(error.response.data);
          setErrorMessages({ apiError: error.response.data });
          setSuccessMessage("");
          console.log(errorMessages);
        }
      }
    } else {
      setErrorMessages(errors);
    }
  };

  const scontainer = {
    backdropFilter: "blur(30px)",
    boxShadow: "0px 0px 30px rgba(227,228,237,0.37)",
    border: " 2px solid rgba(255,255,255,0.18)"
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${back})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
      <div className="max-w-md w-full p-4 rounded-lg shadow-md" style={scontainer}>
        <h2 className="animate__heartBeat text-gray-dark text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {successMessage && <p className="text-white mb-4">{successMessage}</p>}
          {errorMessages.apiError && <p className="text-white mb-4">{errorMessages.apiError}</p>}


          <div className="mb-4">
            <label htmlFor="fullname" className="block text-gray-dark font-semibold">Full Name</label>
            <input
              id="fullname"
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
              placeholder="Enter your full name"
              ref={fullnameRef}
              onChange={() => handleFieldChange('fullname')}
            />
            {errorMessages.fullname && <p className="text-red text-xl">{errorMessages.fullname}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-dark font-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
              placeholder="Enter your email"
              ref={emailRef}
              onChange={() => handleFieldChange('email')}
            />
            {errorMessages.email && <p className="text-red text-xl">{errorMessages.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-dark font-semibold">Password</label>
            <div className="relative group">
              <input
                type="password"
                id="password"
                className="w-full border border-gray-dark p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                ref={passwordRef}
                onChange={() => handleFieldChange('password')}
              />
              {errorMessages.password && <p className="text-red text-xl">{errorMessages.password}</p>}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-dark font-semibold">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Confirm your password"
              ref={confirmPasswordRef}
              onChange={() => handleFieldChange('confirmPassword')}
            />
            {errorMessages.confirmPassword && <p className="text-red text-xl">{errorMessages.confirmPassword}</p>}
          </div>

          <button type="submit" className="w-full bg-orange text-white py-2 rounded-full hover:bg-customOrange">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
