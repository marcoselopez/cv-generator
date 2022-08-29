import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";

const Experience = () => {

  const {errors, setErrors, setCurriculum, curriculum} = useContext(AuthContext);
  const {experiencePosition, companyName, jobStartingDate, jobEndingDate, jobDescription} = curriculum.experience;

  //-HANDLE CHANGE EXPERIENCE
  const handleChangeExperience = (e) => {
    setCurriculum({
      ...curriculum, experience: {...curriculum.experience, [e.target.name]: e.target.value}
    })
  };

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
  };

  //- RENDER
  return (
    <>
      <h3 className="subtitle">New Experience</h3>
      <div className="form-row">
        <div className="form-group col-md-6 col-sm-12">
          <label htmlFor="experiencePosition" className="form-label">Position</label>
          <input 
            value={experiencePosition} 
            onChange={handleChangeExperience} 
            type="text" 
            name="experiencePosition" 
            placeholder="Title" 
            className="form-control" 
            disabled={curriculum.experiences.length === 3 && true}
          />
        </div>
        <div className="form-group col-md-6 col-sm-12">
          <label htmlFor="companyName" className="form-label">Company</label>
          <input
            value={companyName} 
            onChange={handleChangeExperience} 
            type="text" 
            name="companyName" 
            placeholder="Name of the Company" 
            className="form-control" 
            disabled={curriculum.experiences.length === 3 && true} 
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4 col-sm-12">
          <label htmlFor="jobStartingDate" className="form-label">Starting Date</label>
          <input 
            value={jobStartingDate} 
            onChange={handleChangeExperience} 
            type="date" 
            name="jobStartingDate" 
            className="form-control" 
            disabled={curriculum.experiences.length === 3 && true}
          />
        </div>
        <div className="form-group col-md-4 col-sm-12">
          <label htmlFor="jobEndingDate" className="form-label">Ending Date</label>
          <input 
            value={jobEndingDate} 
            onChange={handleChangeExperience} 
            type="date" 
            name="jobEndingDate" 
            className="form-control" 
            disabled={curriculum.experiences.length === 3 && true} 
          />
        </div>
        <div className="form-group col-sm-12">
          <label htmlFor="jobDescription" className="form-label">Description</label>
          <textarea 
            value={jobDescription} 
            onChange={handleChangeExperience} 
            name="jobDescription" 
            id="first-job-description" 
            rows="6" 
            className="form-control" 
            placeholder="Responsabilities, technologies, tasks, etc" 
            disabled={curriculum.experiences.length === 3 && true}>              
          </textarea>
        </div>
      </div>

      <div className="saved-counter">
        <small>Saved Experiences: {curriculum.experiences.length}</small>
      </div>
      {errors.experience && <div className="error"><small>{errors.experience}</small></div>}
      <div>
        <button 
          onClick={saveExperience} 
          type="button" 
          className="btn btn-success save-button" 
          disabled={curriculum.experiences.length === 3 && true}
        >
          Save Experience
        </button>
      </div>
    </>
  )
};

export default Experience;