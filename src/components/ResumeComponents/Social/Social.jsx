

const Social = ({handleChange}) => {
  return (
    <>
      <h1 className="title">Social Details</h1>
      <div className="form-row">
        <div className="form-group col-md-8 col-12">
          <label htmlFor="github" className="form-label">Github</label>
          <input onChange={handleChange} type="text" name="github" placeholder="Username" className="form-control" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-8 col-12">
          <label htmlFor="linkedin" className="form-label">LinkedIn</label>
          <input onChange={handleChange} type="text" name="linkedin" placeholder="Username" className="form-control" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-8 col-12">
          <label htmlFor="portfolio" className="form-label">Personal Portfolio</label>
          <input onChange={handleChange} type="text" name="portfolio" placeholder="URL" className="form-control" />
        </div>
      </div>
    </>
  )
}

export default Social