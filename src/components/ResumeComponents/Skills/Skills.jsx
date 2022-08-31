import { useContext } from "react";
import AuthContext from '../../auth/AuthContext';

const Skills = () => {
  const {errors, setErrors, curriculum, setCurriculum} = useContext(AuthContext);
  const {skillName, skillPower} = curriculum.skill;

  //- HANDLECHANGE SKILL
  const handleChangeSkill = (e) => {
    const noSpecialChars = /^[a-zA-ZäöüáéíóúÄÖÜÁÉÍÓÚ]*$/;
    const value = e.target.value.trim().replaceAll(' ', '');

    setCurriculum({
      ...curriculum, skill: {...curriculum.skill, [e.target.name]: e.target.value}
    })

    if(e.target.type === 'range'){
      e.target.className = 'form-range'
      return
    }

    if(value.length > 25) {
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

  //- SAVE SKILL
  const saveSkill = () => {
    if(
      curriculum.skill.skillName.trim() === '' ||
      curriculum.skill.skillPower === '0'
    ){
      setErrors({
        ...errors, skills: "Please enter a skill and the amount of knowledge on it"
      })
      return
    }

    if('skillName' in errors){ //! It will be better to use Object.hasOwnProperty('key')
      setErrors({
        ...errors, skills: "Please enter a valid skill"
      })
      return
    }

    setCurriculum({
      ...curriculum, skills: [...curriculum.skills, curriculum.skill],
      skill: {
        skillName: "",
        skillPower: '0'
      }
    })
    setErrors({
      ...errors, skills: ""
    })
  }

  return (
    <>
      <h1 className="title">Your Skills <small className="limit">(Up to 5)</small></h1>
      <div className="form-row">
        <div className="form-group col-12 col-md-3">
          <label htmlFor="skillName" className="form-label">Skill:</label>
          <input 
            type="text"  
            name="skillName" 
            placeholder="e.g. HTML" 
            className="form-control"
            onChange={handleChangeSkill}
            value={skillName}
          />
          {errors.skillName && <small className="error">{errors.skillName}</small>}
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="skillPower" className="form-label">Amount of knowledge on this skill:</label>
          <input 
            type="range" 
            name="skillPower" 
            className="form-range" 
            min="0" 
            max="100" 
            id="customRange2"
            onChange={handleChangeSkill}
            value={skillPower}
          />
          <p>{skillPower}%</p>
        </div>
      </div>

      <div className="saved-counter">
        <small>Saved Skills: {curriculum.skills.length}</small>
      </div>
      {errors.skills && <div className="error"><small>{errors.skills}</small></div>}
      <div>
        <button 
          onClick={saveSkill}
          type="button" 
          className="btn btn-success save-button" 
          disabled={curriculum.skills.length === 5 && true}
        >
          Save Skill
        </button>
      </div>
    </>
  )
};

export default Skills;