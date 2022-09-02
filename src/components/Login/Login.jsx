import axios from 'axios';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import './login.css'

const Login = () => {
  const navigate = useNavigate();
  const {user, setUser, errors, setErrors} = useContext(AuthContext)

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3001/api/users/login', {
      email: user.email,
      password: user.password
    })
      .then(response => {
        const {data} = response
        navigate('/resume_create')
      })
      .catch(error => {
        const {response} = error
        const {data} = response
        setErrors({
          ...errors, loginError: data.message
        })
      })
  }

  return (
    <div className="login-container container animate__animated animate__fadeIn">
      <div className="login-box">
        <h4 className="animate__animated animate__fadeInLeft">USER LOGIN</h4>
        <form onSubmit={handleSubmit} className="form-section login-form-section">
          <div className="form-row w-100">
            <div className="form-group col-12">
              <label htmlFor="email" className="form-label">Email:</label>
              <input 
                type="email" 
                className="form-control"
                name="email"
                onChange={handleChange}
                value={user.email}
                required
              />
            </div>
          </div>
          <div className="form-row w-100">
            <div className="form-group col-12">
              <label htmlFor="password" className="form-label">Password:</label>
              <input 
                type="password" 
                className="form-control"
                name="password"
                onChange={handleChange}
                value={user.password}
                required
              />
            </div>
          </div>
        {errors.loginError && <small className="submit-error">{errors.loginError}</small>}
        <button className="btn btn-light py-3 mt-3 w-50 login-button">LOGIN</button>
        </form>
        <hr className="w-75" />
        <div className="login-box-footer">
          <p>Need an account? <Link to="/register">SIGN UP</Link></p>
        </div>
      </div>
    </div>
  )
};

export default Login;