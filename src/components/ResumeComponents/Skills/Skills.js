import React from 'react'

const Skills = ({handleChange}) => {
  return (
    <>
      <h1 className="title">Your Skills</h1>
      <div className="form-row">
        <div className="form-group col-sm-12">
          <label htmlFor="skills" className="form-label">Tell us about your skills</label>
          <textarea onChange={handleChange} name="skills" id="skills" rows="6" className="form-control" placeholder="e.g HTML, CSS, REACT, Etc."></textarea>
        </div>
      </div>
    </>
  )
}

export default Skills