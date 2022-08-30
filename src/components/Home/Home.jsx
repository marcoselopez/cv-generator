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
    errors,
    setErrors, 
    curriculum, 
    setCurriculum,
    handleChangeRequired,
    handleChange
  } = useContext(AuthContext);

  

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

    // navigate('/resume_view', {state: curriculum})

  };

  //- RENDER
  return (
    <div className="container mt-5 mb-5">
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

        <button className="py-3 my-3 btn btn-dark col-12 form-button">GENERATE MY CV</button>
      </form>
    </div>
  )
}

export default Home