import { useState } from "react";
import AuthContext from "./components/auth/AuthContext";
import Router from "./routes/Router";


function App() {  
  const [errors, setErrors] = useState({});
  const [curriculum, setCurriculum] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    nationality: "",
    phone: "",
    email: "",
    description: "",
    github: "",
    linkedin: "",
    portfolio: "",
    educations: [],
    education: {        
      educationDegree: "",
      institutionName: "",
      educationStartingDate: "",
      educationEndingDate: ""
    },
    experiences: [],
    experience: {
      experiencePosition: "",
      companyName: "",
      jobStartingDate: "",
      jobEndingDate: "",
      jobDescription: ""
    },
    skills: [],
    skill: {
      skillName: "",
      skillPower: 0
    },
    interests: []
  });

  //-HANDLE CHANGE FOR REQUIRED INPUTS
  const handleChangeRequired = (e) => {
    const noSpecialChars = /^[a-zA-Z0-9äöüáéíóúÄÖÜÁÉÍÓÚ]*$/;
    const value = e.target.value.trim().replaceAll(" ", "");
    
    setCurriculum(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))

    if(value.length >= 4 && value.length <= 25){
      if(noSpecialChars.test(value)){
        e.target.className = 'form-control is-valid'
        setErrors({
          ...errors, [e.target.name]: ''
        })
      } else {
        e.target.className = 'form-control is-invalid'
        setErrors({
          ...errors, [e.target.name]: 'No special characters allowed'
        })
      }
    } else {
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Please indicate a minimum of 4 characters and a maximum of 25'
      })
    }
  }

  //- HANDLE CHANGE FOR NON REQUIRED INPUTS
  const handleChange = (e) => {
    const noSpecialChars = /^[a-zA-Z0-9äöüáéíóúÄÖÜÁÉÍÓÚ]*$/;
    const value = e.target.value;
    
    setCurriculum(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))

    if(value.length < 26){
      if(noSpecialChars.test(value)){
        e.target.className = 'form-control is-valid'
        setErrors({
        ...errors, [e.target.name]: ''
        })
      } else {
        e.target.className = 'form-control is-invalid'
        setErrors({
          ...errors, [e.target.name]: 'No special characters allowed'
        })
      }      
    } else {
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Only a max of 25 characters are allowed'
      })
    }
  }

  //- HANDLE CHANGE FOR EMAILS
  const handleChangeEmail = (e) => {
    let checkEmail = /\S+@\S+\.\S+/;
    let value = e.target.value;

    setCurriculum(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))

    if(value.length > 10 && value.length < 30){
      if(checkEmail.test(value)){
        e.target.className = 'form-control is-valid'
        setErrors({
          ...errors, [e.target.name]: ''
        })
      } else {
        e.target.className = 'form-control is-invalid'
        setErrors({
          ...errors, [e.target.name]: 'Please enter a valid email address'
        })
      }
    } else {
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Please indicate a minimum of 10 characters and a maximum of 30'
      })
    }
  }

  //- HANDLE CHANGE FOR PHONES
  const handleChangePhone = (e) => {
    const checkPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/;
    const value = e.target.value;

    setCurriculum(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))

    if(value.length > 7 && value.length < 15){
      if(checkPhone.test(value)){
        e.target.className = 'form-control is-valid'
        setErrors({
          ...errors, [e.target.name]: ''
        })
      } else {
        e.target.className = 'form-control is-invalid'
        setErrors({
          ...errors, [e.target.name]: 'Please enter a valid phone number'
        })
      }
    } else {
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Please indicate a minimum of 7 characters and a maximum of 30'
      })
    }
  }

  //* RENDER
  return (
    <AuthContext.Provider value={{
      errors,
      setErrors,
      curriculum,
      setCurriculum,
      handleChangeRequired,
      handleChange,
      handleChangeEmail,
      handleChangePhone
    }}>
      <div className="App">
        <Router />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
