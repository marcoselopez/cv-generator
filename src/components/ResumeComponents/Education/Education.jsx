import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";

const Education = ({curriculum}) => {

  const {errors, setErrors, setCurriculum} = useContext(AuthContext);
  const {educationDegree, institutionName, educationStartingDate, educationEndingDate} = curriculum.education;

  //-HANDLE CHANGE EDUCATION
  const handleChangeEducation = (e) => {
    setCurriculum({
      ...curriculum, education: {...curriculum.education, [e.target.name]: e.target.value}
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

  return (
    <>    
      <h3 className="subtitle">New Education</h3>
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
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4 col-12">
          <label htmlFor="educationStartingDate" className="form-label">Starting Date</label>
          <input 
            value={educationStartingDate} 
            onChange={handleChangeEducation} 
            type="date"  
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