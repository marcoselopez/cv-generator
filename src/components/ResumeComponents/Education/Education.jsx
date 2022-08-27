
const Education = ({handleChangeEducation, curriculum}) => {

  const {educationDegree, institutionName, educationStartingDate, educationEndingDate} = curriculum.education

  return (
    <>    
      <h3 className="subtitle">New Education</h3>
      <div className="form-row">
        <div className="form-group col-md-6 col-sm-12">
          <label htmlFor="educationDegree" className="form-label">Education Degree</label>
          <input value={educationDegree} onChange={handleChangeEducation} type="text" name="educationDegree" placeholder="Your Degree" className="form-control" />
        </div>
        <div className="form-group col-md-6 col-sm-12">
          <label htmlFor="institutionName" className="form-label">Institution</label>
          <input value={institutionName} onChange={handleChangeEducation} type="text" name="institutionName" placeholder="Name of the Institution" className="form-control" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4 col-sm-12">
          <label htmlFor="educationStartingDate" className="form-label">Starting Date</label>
          <input value={educationStartingDate} onChange={handleChangeEducation} type="date" name="educationStartingDate" className="form-control" />
        </div>
        <div className="form-group col-md-4 col-sm-12">
          <label htmlFor="educationEndingDate" className="form-label">Ending Date</label>
          <input value={educationEndingDate} onChange={handleChangeEducation} type="date" name="educationEndingDate" className="form-control" />
        </div>
      </div>
    </>
  )
};

export default Education;