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
      skillPower: '0'
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

    if(value.length < 4 || value.length > 25){
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Please indicate a minimum of 4 characters and a maximum of 25'
      })
      return
    }

    if(!noSpecialChars.test(value)){
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'No special characters allowed'
      })
      return
    }

    e.target.className = 'form-control is-valid'
    setErrors({
      ...errors, [e.target.name]: ''
    })
  }

  //- HANDLE CHANGE FOR NON REQUIRED INPUTS
  const handleChange = (e) => {
    const noSpecialChars = /^[a-zA-Z0-9äöüáéíóúÄÖÜÁÉÍÓÚ]*$/;
    const value = e.target.value;
    
    setCurriculum(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))

    if(value.length > 26){
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Only a max of 25 characters are allowed'
      })
      return
    }

    if(!noSpecialChars.test(value)){
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'No special characters allowed'
      })
      return
    }

    if(value === ''){
      e.target.className = 'form-control'
      setErrors({
        ...errors, [e.target.name]: ''
      })
      return
    }
    
    e.target.className = 'form-control is-valid'
    setErrors({
    ...errors, [e.target.name]: ''
    })
  }

  //- HANDLE CHANGE FOR EMAILS
  const handleChangeEmail = (e) => {
    let checkEmail = /\S+@\S+\.\S+/;
    let value = e.target.value;

    setCurriculum(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))

    if(value.length < 10 || value.length > 30){
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Please indicate a minimum of 10 characters and a maximum of 30'
      })
      return
    }

    if(!checkEmail.test(value)){
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Please enter a valid email address'
      })
      return
    }

    e.target.className = 'form-control is-valid'
    setErrors({
      ...errors, [e.target.name]: ''
    })
  }

  //- HANDLE CHANGE FOR PHONES
  const handleChangePhone = (e) => {
    const checkPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/;
    const value = e.target.value;

    setCurriculum(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))

    if(!checkPhone.test(value)){
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Please enter a valid phone number'
      })
      return
    }
    
    if(value.length < 7 || value.length > 15){
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Please indicate a minimum of 7 characters and a maximum of 30'
      })
      return
    }

    e.target.className = 'form-control is-valid'
    setErrors({
      ...errors, [e.target.name]: ''
    })
  }

  //- HANDLE CHANGE FOR URLS
  const handleChangeUrl = (e) => {
    const checkUrl = /^(|https?:\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?)$/;
    const value = e.target.value;

    setCurriculum(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
    
    if(!checkUrl.test(value)){
      e.target.className = 'form-control is-invalid'
        setErrors({
          ...errors, [e.target.name]: 'Please enter a valid complete url'
        })
      return
    }

    if(value.length > 50){
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Please indicate a minimum of 10 characters and a maximum of 50'
      })
      return
    }

    if(value === ''){
      e.target.className = 'form-control'
      setErrors({
        ...errors, [e.target.name]: ''
      })
      return
    }

    e.target.className = 'form-control is-valid'
    setErrors({
      ...errors, [e.target.name]: ''
    })
    
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
      handleChangePhone,
      handleChangeUrl
    }}>
      <div className="App">
        <Router />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
