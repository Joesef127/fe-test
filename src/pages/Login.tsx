import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import illustration from '../assets/images/illustration.png';


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email ||!password) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate login with email and password
    if (email === 'test@example.com' && password === 'test123') {
      setError('');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  }

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="image-wrapper">
          <img src={logo} alt="Lendsqr Logo" className="logo" />
          <img src={illustration} alt="Illustration" className="illustration" />
        </div>
      </div>

      <div className="login-right">
        <div className="login-form">
          <div className="form-greeting">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>

          <form className="form-box">
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-input" />
            </div>

            <div className="form-group password-group">
              <input
                type="password"
                placeholder="Password"
                className="form-input password-input"
              />
              <button type="button" className="show-password">
                SHOW
              </button>
            </div>

            <a href="#" className="forgot-password">
              FORGOT PASSWORD?
            </a>

            <button type="submit" className="login-button">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
