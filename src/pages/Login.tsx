import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import illustration from '../assets/images/illustration.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (password.length <= 6) {
      setError('password must be at least 6 characters');
      return;
    }

    setError(null);

    console.log('Login successful!');
    navigate('/dashboard');
  };

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

          <form id='login-form' className="form-box" onSubmit={handleSubmit}>
            <div className="error-div">
              {error && <span className="error-message">{error}</span>}
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group password-group">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="form-input password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>

            <Link to={'#'} className="forgot-password">
              FORGOT PASSWORD?
            </Link>

            <button type="submit" className="login-button" form='login-form'>
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
