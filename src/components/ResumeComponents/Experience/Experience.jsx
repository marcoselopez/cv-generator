
const Experience = ( {handleChangeExperience} ) => {
  return (
    <>
      <h3 className="subtitle">New Experience</h3>
      <div className="form-row">
        <div className="form-group col-md-6 col-sm-12">
          <label htmlFor="experiencePosition" className="form-label">Position</label>
          <input onChange={handleChangeExperience} type="text" name="experiencePosition" placeholder="Title" className="form-control" />
        </div>
        <div className="form-group col-md-6 col-sm-12">
          <label htmlFor="companyName" className="form-label">Company</label>
          <input onChange={handleChangeExperience} type="text" name="companyName" placeholder="Name of the Company" className="form-control" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4 col-sm-12">
          <label htmlFor="jobStartingDate" className="form-label">Starting Date</label>
          <input onChange={handleChangeExperience} type="date" name="jobStartingDate" className="form-control" />
        </div>
        <div className="form-group col-md-4 col-sm-12">
          <label htmlFor="jobEndingDate" className="form-label">Ending Date</label>
          <input onChange={handleChangeExperience} type="date" name="jobEndingDate" className="form-control" />
        </div>
        <div className="form-group col-sm-12">
          <label htmlFor="jobDescription" className="form-label">Description</label>
          <textarea onChange={handleChangeExperience} name="jobDescription" id="first-job-description" rows="6" className="form-control" placeholder="Responsabilities, technologies, tasks, etc"></textarea>
        </div>
      </div>
    </>
  )
};

export default Experience;