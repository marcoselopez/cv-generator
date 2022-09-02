import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";

const Education = ({curriculum}) => {

  const {errors, setErrors, setCurriculum} = useContext(AuthContext);
  const {educationDegree, institutionName, educationStartingDate, educationEndingDate} = curriculum.education;
  const date = new Date().toISOString()
  const today = date.substring(0, date.lastIndexOf('T'))

  //-HANDLE CHANGE EDUCATION
  const handleChangeEducation = (e) => {
    const noSpecialChars = /^[a-zA-ZäöüáéíóúÄÖÜÁÉÍÓÚ]*$/;
    const value = e.target.value.trim().replaceAll(' ', '');

    setCurriculum({
      ...curriculum, education: {...curriculum.education, [e.target.name]: e.target.value}
    })

    if(e.target.type === 'date'){
      e.target.className = 'form-control is-valid'
      delete errors[e.target.name]
      setErrors({
        ...errors
      })
      return
    }

    if(!noSpecialChars.test(value)){
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Only letters allowed'
      })
      return
    }

    if(value.length > 25){
      e.target.className = 'form-control is-invalid'
      setErrors({
        ...errors, [e.target.name]: 'Only a maximum of 25 characters are allowed'
      })
      return
    }

    if(value === ''){
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

  //-SAVE EDUCATION
  const saveEducation = () => {
    if(
      curriculum.education.educationDegree.trim().length === 0 ||
      curriculum.education.institutionName.trim().length === 0 ||
      curriculum.education.educationStartingDate.trim().length === 0 ||
      curriculum.education.educationEndingDate.trim().length === 0
    ){
      setErrors({
        ...errors, education: 'Please enter information on all fields'
      })
      return
    }

    if(
      'educationDegree' in errors ||
      'institutionName' in errors ||
      'educationStartingDate' in errors ||
      'educationEndingDate' in errors
    ){
      setErrors({
        ...errors, education: 'Please enter valid information on all fields'
      })
      return
    }

    setCurriculum({
      ...curriculum, educations: [...curriculum.educations, curriculum.education],
      education: {
        educationDegree: '',
        institutionName: '',
        educationStartingDate: '',
        educationEndingDate: ''
      }
    })
    delete errors['education']
    delete errors['educationsNumber']
    setErrors({
      ...errors
    })
  } 

  return (
    <>    
      <h3 className="subtitle">New Education</h3>
      {errors.educationsNumber && <small className="submit-error">{errors.educationsNumber}</small>}
      <div className="form-row">
        <div className="form-group col-md-6 col-12">
          <label htmlFor="educationDegree" className="form-label">Education Degree</label>
          <input 
            value={educationDegree} 
            onChange={handleChangeEducation} 
            type="text"  
            name="educationDegree" 
            placeholder="Your Degree" 
            className="form-control"
            disabled={curriculum.educations.length === 3 && true} 
          />
          {errors.educationDegree && <small className="error">{errors.educationDegree}</small>}
        </div>
        <div className="form-group col-md-6 col-12">
          <label htmlFor="institutionName" className="form-label">Institution</label>
          <input 
            value={institutionName} 
            onChange={handleChangeEducation} 
            type="text"  
            name="institutionName" 
            placeholder="Name of the Institution" 
            className="form-control" 
            disabled={curriculum.educations.length === 3 && true}
          />
          {errors.institutionName && <small className="error">{errors.institutionName}</small>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4 col-12">
          <label htmlFor="educationStartingDate" className="form-label">Starting Date</label>
          <input 
            value={educationStartingDate} 
            onChange={handleChangeEducation} 
            type="date" 
            max={today} 
            name="educationStartingDate" 
            className="form-control"
            disabled={curriculum.educations.length === 3 && true} 
          />
        </div>
        <div className="form-group col-md-4 col-12">
          <label htmlFor="educationEndingDate" className="form-label">Ending Date</label>
          <input 
            value={educationEndingDate} 
            onChange={handleChangeEducation} 
            type="date" 
            min={educationStartingDate}
            max={today}
            name="educationEndingDate" 
            className="form-control"
            disabled={curriculum.educations.length === 3 && true} 
          />
        </div>
      </div>

      <div className="saved-counter">
        <small>Saved Educations: {curriculum.educations.length}</small>
      </div>
      {errors.education && <div className="error"><small>{errors.education}</small></div>}
      <div>
        <button 
          onClick={saveEducation} 
          type="button"  
          className="btn btn-success save-button"
          disabled={curriculum.educations.length === 3 && true}
        >
          Save Education
        </button>
      </div> 
    </>
  )
};

export default Education;