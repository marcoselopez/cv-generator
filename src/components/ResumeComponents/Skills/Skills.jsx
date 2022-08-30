import { useContext } from "react";
import AuthContext from '../../auth/AuthContext';

const Skills = () => {
  const {errors, setErrors, curriculum, setCurriculum} = useContext(AuthContext);
  const {skillName, skillPower} = curriculum.skill;

  const handleChangeSkill = (e) => {
    setCurriculum({
      ...curriculum, skill: {...curriculum.skill, [e.target.name]: e.target.value}
    })
  }

  const saveSkill = () => {
    if(curriculum.skill.skillName.length > 0 && curriculum.skill.skillPower > 0){
      setCurriculum({
        ...curriculum, skills: [...curriculum.skills, curriculum.skill],
        skill: {
          skillName: "",
          skillPower: 0
        }
      })
      setErrors({
        ...errors, skills: ""
      })
    } else {
      setErrors({
        ...errors, skills: "Please enter a skill and the amount of knowledge on it"
      })
    }
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
        </div>
        <div className="form-group col-12 col-md-6">
          <label htmlFor="skillPower" className="form-label">Amount of knowledge on this skill:</label>
          <input 
            type="range" 
            name="skillPower" 
            class="form-range" 
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