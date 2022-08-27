import { useState } from 'react'
import Education from '../ResumeComponents/Education/Education';
import Social from '../ResumeComponents/Social/Social';
import General from '../ResumeComponents/General/General';
import Experience from '../ResumeComponents/Experience/Experience';
import './home.css'
import Skills from '../ResumeComponents/Skills/Skills';


const Home = () => {
  const [errors, setErrors] = useState({});
  const [curriculum, setCurriculum] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    profession: "",
    location: "",
    phone: "",
    email: "",
    address: "",
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
    skills: ""
  });

  //-HANDLE CHANGE
  const handleChange = (e) => {
    setCurriculum(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  //-HANDLE CHANGE EDUCATION
  const handleChangeEducation = (e) => {
    setCurriculum({
      ...curriculum, education: {...curriculum.education, [e.target.name]: e.target.value}
    })
  }

  //-HANDLE CHANGE EXPERIENCE
  const handleChangeExperience = (e) => {
    setCurriculum({
      ...curriculum, experience: {...curriculum.experience, [e.target.name]: e.target.value}
    })
  }

  //-SAVE EDUCATION
  const saveEducation = () => {
    if(
      curriculum.education.educationDegree.length > 0 &&
      curriculum.education.institutionName.length > 0 &&
      curriculum.education.educationStartingDate.length > 0 &&
      curriculum.education.educationEndingDate.length > 0
    ){
      setCurriculum({
        ...curriculum, educations: [...curriculum.educations, curriculum.education],
        education: {
          educationDegree: '',
          institutionName: '',
          educationStartingDate: '',
          educationEndingDate: ''
        }
      })
      setErrors({
        ...errors, education: ''
      })
    } else {
      setErrors({
        ...errors, education: 'Please enter information on all fields'
      })
    }
  } 
  
  //-SAVE EXPERIENCE
  const saveExperience = () => {
    if(
      curriculum.experience.experiencePosition.length > 0 &&
      curriculum.experience.companyName.length > 0 &&
      curriculum.experience.jobStartingDate.length > 0 &&
      curriculum.experience.jobEndingDate.length > 0 &&
      curriculum.experience.jobDescription.length > 0
    ){
      setCurriculum({
        ...curriculum, experiences: [...curriculum.experiences, curriculum.experience],
        experience: {
          experiencePosition: "",
          companyName: "",
          jobStartingDate: "",
          jobEndingDate: "",
          jobDescription: ""
        }
      })
    } else {
      setErrors({
        ...errors, experience: 'Please enter information on all fields'
      })
    }
  }

  //-HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault()

    // const form = e.target;
    // const address = form.address
    // const firstName = form.firstName

    // if (firstName.value.length === 0){
    //   setErrors({...errors, firstName: 'Please enter your first name'})
    //   firstName.className = 'form-control is-invalid'
    //   firstName.focus()
    // } else if(address.value.length === 0){
    //   setErrors({...errors, address: 'Please enter your current Address'})
    //   address.className = 'form-control is-invalid'
    //   address.focus()
    // }

    console.log(curriculum)

  };

  //* RENDER
  return (
    <div className="container mt-5 mb-5">
      <form onSubmit={handleSubmit} className="form-section">

        {/* GENERAL SECTION  */}
        <General handleChange={handleChange} errors={errors} curriculum={curriculum} />

        {/* SOCIAL SECTION  */}
        <Social handleChange={handleChange} />

        {/* EDUCATION SECTION  */}
        <h1 className="title">Educational Details</h1>
        <Education handleChangeEducation={handleChangeEducation} curriculum={curriculum} />
        <div className="saved-counter"><small>Saved Educations: {curriculum.educations.length}</small></div>
        {errors.education && <div className="error"><small>{errors.education}</small></div>}
        <div><button onClick={saveEducation} type="button" className="btn btn-success save-button">Save Education</button></div>   
        
        {/* PROFESSIONAL EXPERIENCE SECTION  */}
        <h1 className="title">Professional Experience Details</h1>
        <Experience handleChangeExperience={handleChangeExperience} />
        <div className="saved-counter"><small>Saved Experiences: {curriculum.experiences.length}</small></div>
        {errors.experience && <div className="error"><small>{errors.experience}</small></div>}
        <div><button onClick={saveExperience} type="button" className="btn btn-success save-button">Save Experience</button></div> 

        {/* SKILLS SECTION  */}
        <Skills handleChange={handleChange} />
        <button className="py-3 my-3 btn btn-dark col-sm-12 form-button">GENERATE MY CV</button>
      </form>
    </div>
  )
}

export default Home