import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";

const Experience = () => {

  const {errors, setErrors, setCurriculum, curriculum} = useContext(AuthContext);
  const {experiencePosition, companyName, jobStartingDate, jobEndingDate, jobDescription} = curriculum.experience;

  //-HANDLE CHANGE EXPERIENCE
  const handleChangeExperience = (e) => {
    const noSpecialChars = /^[a-zA-ZäöüáéíóúÄÖÜÁÉÍÓÚ]*$/;
    const value = e.target.value.trim().replaceAll(' ', '');

    setCurriculum({
      ...curriculum, experience: {...curriculum.experience, [e.target.name]: e.target.value}
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
      
    console.log(errors)
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
  };

  //-SAVE EXPERIENCE
  const saveExperience = () => {
    if(
      curriculum.experience.experiencePosition.trim().length === 0 ||
      curriculum.experience.companyName.trim().length === 0 ||
      curriculum.experience.jobStartingDate.trim().length === 0 ||
      curriculum.experience.jobEndingDate.trim().length === 0 ||
      curriculum.experience.jobDescription.trim().length === 0
    ){
      setErrors({
        ...errors, experience: 'Please enter information on all fields'
      })
      console.log(errors)
      return
    }

    if(
      'experiencePosition' in errors ||
      'companyName' in errors ||
      'jobStartingDate' in errors ||
      'jobEndingDate' in errors || 
      'jobDescription' in errors
    ){
      setErrors({
        ...errors, experience: 'Please enter valid information on all fields'
      })
      console.log(errors)
      return
    }

    setCurriculum({
      ...curriculum, experiences: [...curriculum.experiences, curriculum.experience],
      experience: {
        experiencePosition: '',
        companyName: '',
        jobStartingDate: '',
        jobEndingDate: '',
        jobDescription: ''
      }
    })
    delete errors['experience']
    setErrors({
      ...errors
    })
  };

  //- RENDER
  return (
    <>
      <h3 className="subtitle">New Experience</h3>
      <div className="form-row">
        <div className="form-group col-md-6 col-12">
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
          {errors.experiencePosition && <small className="error">{errors.experiencePosition}</small>}
        </div>
        <div className="form-group col-md-6 col-12">
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
          {errors.companyName && <small className="error">{errors.companyName}</small>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4 col-12">
          <label htmlFor="jobStartingDate" className="form-label">Starting Date</label>
          <input 
            value={jobStartingDate} 
            onChange={handleChangeExperience} 
            type="date" 
            name="jobStartingDate" 
            className="form-control" 
            disabled={curriculum.experiences.length === 3 && true}
          />
          {errors.jobStartingDate && <small className="error">{errors.jobStartingDate}</small>}
        </div>
        <div className="form-group col-md-4 col-12">
          <label htmlFor="jobEndingDate" className="form-label">Ending Date</label>
          <input 
            value={jobEndingDate} 
            onChange={handleChangeExperience} 
            type="date" 
            name="jobEndingDate" 
            className="form-control" 
            disabled={curriculum.experiences.length === 3 && true} 
          />
          {errors.jobEndingDate && <small className="error">{errors.jobEndingDate}</small>}
        </div>
        <div className="form-group col-12">
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
          {errors.jobDescription && <small className="error">{errors.jobDescription}</small>}
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