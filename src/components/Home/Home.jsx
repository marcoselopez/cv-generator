import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Education from '../ResumeComponents/Education/Education';
import Social from '../ResumeComponents/Social/Social';
import General from '../ResumeComponents/General/General';
import Experience from '../ResumeComponents/Experience/Experience';
import Skills from '../ResumeComponents/Skills/Skills';
import AuthContext from '../auth/AuthContext';
import './home.css'


const Home = () => {  
  const navigate = useNavigate();
  const { 
    curriculum,
    handleChange,
    errors,
    setErrors
  } = useContext(AuthContext);

  

  //-HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault()

    // if(
    //   errors.hasOwnProperty('github') ||
    //   errors.hasOwnProperty('skillName')
    // ){
    //   setErrors({
    //     ...errors, invalidInputs: 'You have incorrect or invalid information, please check'
    //   })
    //   return
    // }

    if(curriculum.educations.length === 0){
      e.target.educationDegree.focus()
      setErrors({
        ...errors, educationsNumber: 'Please enter at least 1 education'
      })
      return
    }

    if(curriculum.experiences.length === 0){
      e.target.experiencePosition.focus()
      setErrors({
        ...errors, experiencesNumber: 'Please enter at least 1 experience'
      })
      return
    }

    navigate('/resume_view', {state: curriculum})

  };

  //- RENDER
  return (
    <div className="container mt-5 mb-5 animate__animated animate__fadeIn">
      <form onSubmit={handleSubmit} className="form-section">

        {/* GENERAL SECTION  */}
        <General />

        {/* SOCIAL SECTION  */}
        <Social />

        {/* EDUCATION SECTION  */}
        <h1 className="title">Educational Details <small className="limit">(Up to 3)</small></h1>
        <Education curriculum={curriculum} />          
        
        {/* PROFESSIONAL EXPERIENCE SECTION  */}
        <h1 className="title">Experience Details <small className="limit">(Up to 3)</small></h1>
        <Experience />         

        {/* SKILLS SECTION  */}
        <Skills handleChange={handleChange} />

        {errors.invalidInputs && <small className="submit-error">{errors.invalidInputs}</small>}
        <button className="py-3 my-3 btn btn-dark col-12 form-button">GENERATE MY CV</button>
      </form>
    </div>
  )
}

export default Home