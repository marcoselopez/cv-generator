import axios from 'axios';
import {useContext} from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../auth/AuthContext'
import './register.css';

const Register = () => {

  const {newUser, setNewUser, errors, setErrors} = useContext(AuthContext)

  //- HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault()

    if(
      errors.hasOwnProperty('username') ||
      errors.hasOwnProperty('email')
    ){
      setErrors({
        ...errors, registerError: 'You have fields that require attention'
      })
      return
    }

    if(newUser.password !== newUser.passwordConfirm){
      e.target.passwordConfirm.className = 'form-control is-invalid'
      return
    }

    setNewUser({
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
    })
    e.target.username.className = 'form-control'
    e.target.email.className = 'form-control'
    e.target.password.className = 'form-control'
    e.target.passwordConfirm.className = 'form-control'


  }

  //- HANDLE CHANGE
  const handleChange = (e) => {
    const value = e.target.value;
    const noSpecialChars = /^[a-zA-Z0-9äöüáéíóúÄÖÜÁÉÍÓÚ]*$/;
    const checkEmail = /\S+@\S+\.\S+/;

    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })

    if(e.target.name === 'email'){
      if(e.target.value !== '' && !checkEmail.test(value)){
        e.target.className = 'form-control is-invalid'
        setErrors({
          ...errors,
          [e.target.name]: 'Please enter a valid email address'
        })
        return
      }
    }

    if(e.target.name === 'username'){
      if(!noSpecialChars.test(value)){
        e.target.className = 'form-control is-invalid'
        setErrors({
          ...errors,
          [e.target.name]: 'No special characters allowed'
        })
        return
      }
    }

    if(e.target.name === 'passwordConfirm'){
      if(e.target.value !== newUser.password){
        e.target.className = 'form-control is-invalid'
        setErrors({
          ...errors,
          [e.target.name]: 'Passwords do not match'
        })
        return
      }
    }

    if(e.target.value === ''){
      e.target.className = 'form-control'
      delete errors[e.target.name]
      setErrors({
        ...errors
      })
      return
    }

    e.target.className = 'form-control is-valid'
    delete errors[e.target.name]
    setErrors({
      ...errors
    })
  }

  return (
    <div className="register-container container animate__animated animate__fadeIn">
      <div className="register-box">
        <h4 className="animate__animated animate__fadeInLeft">USER SIGNUP</h4>
        <form className="form-section register-form-section" onSubmit={handleSubmit}>
          <div className="form-row w-100">
            <div className="form-group col-12">
              <label htmlFor="username" className="form-label">Username:</label>
              <input 
                onChange={handleChange} 
                name="username" 
                type="text" 
                className="form-control"
                value={newUser.username}
                required
              />
              {errors.username && <small className="error">{errors.username}</small>}
            </div>
          </div>
          <div className="form-row w-100">
            <div className="form-group col-12">
              <label htmlFor="email" className="form-label">Email:</label>
              <input 
                onChange={handleChange} 
                name="email" 
                type="email" 
                className="form-control"
                value={newUser.email}
                required
              />
              {errors.email && <small className="error">{errors.email}</small>}
            </div>
          </div>
          <div className="form-row w-100">
            <div className="form-group col-12">
              <label htmlFor="password" className="form-label">Password:</label>
              <input 
                onChange={handleChange} 
                name="password" 
                type="password" 
                className="form-control"
                value={newUser.password}
                required
              />
            </div>
          </div>
          <div className="form-row w-100">
            <div className="form-group col-12">
              <label htmlFor="passwordConfirm" className="form-label">Confirm Password:</label>
              <input
                onChange={handleChange} 
                type="password" 
                className="form-control"
                name="passwordConfirm"
                value={newUser.passwordConfirm}
                required
              />
              {errors.passwordConfirm && <small className="error">{errors.passwordConfirm}</small>}
            </div>
          </div>
        {errors.registerError && <small className="submit-error">{errors.registerError}</small>}
        <button className="btn btn-light py-3 mt-3 w-50 register-button">SIGNUP</button>
        </form>
        <hr className="w-75" />
        <div className="register-box-footer">          
          <p>Already have an account? <Link to="/login">LOGIN</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register