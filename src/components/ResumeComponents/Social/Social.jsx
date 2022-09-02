import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";


const Social = () => {
  const {curriculum, errors, handleChange, handleChangeUrl} = useContext(AuthContext);
  const {github, linkedin, portfolio} = curriculum;
  
  return (
    <>
      <h1 className="title">Social Details</h1>
      <div className="form-row">
        <div className="form-group col-md-8 col-12">
          <label htmlFor="github" className="form-label">Github <small className="mini-label">(Optional)</small></label>
          <input
            onChange={handleChange} 
            type="text" 
            name="github" 
            placeholder="e.g. Username123" 
            className="form-control"
            minLength={4}
            maxLength={25}
            value={github}
          />
          {errors.github && <small className="error">{errors.github}</small>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-8 col-12">
          <label htmlFor="linkedin" className="form-label">LinkedIn <small className="mini-label">(Optional)</small></label>
          <input
            onChange={handleChange} 
            type="text" 
            name="linkedin" 
            placeholder="e.g. Username123" 
            className="form-control"
            minLength={4}
            maxLength={25}
            value={linkedin}
          />
          {errors.linkedin && <small className="error">{errors.linkedin}</small>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-8 col-12">
          <label htmlFor="portfolio" className="form-label">Personal Portfolio <small className="mini-label">(Optional)</small></label>
          <input 
            onChange={handleChangeUrl} 
            type="text" 
            name="portfolio" 
            placeholder="http://www.myportfolio.com" 
            className="form-control"
            minLength={10}
            maxLength={50}
            value={portfolio}
          />
          {errors.portfolio && <small className="error">{errors.portfolio}</small>}
        </div>
      </div>
    </>
  )
}

export default Social