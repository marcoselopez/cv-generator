import validateInput from '../../../helpers/validateInput'

const General = ({handleChange, errors, curriculum}) => {
  return (
    <>
      <h1 className="title">General Details</h1>
        <div className="form-row">
          <div className="form-group col-12 col-md-4">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input onBlur={validateInput} onChange={handleChange} type="text" name="firstName" placeholder="Your First Name" className="form-control" value={curriculum.firstName} />
            {errors.firstName && <small className="error">{errors.firstName}</small>}
          </div>
          <div className="form-group col-12 col-md-4">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input onChange={handleChange} type="text" name="lastName" placeholder="Your Last Name" className="form-control" />
          </div>
          <div className="form-group col-12 col-md-4">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select onChange={handleChange} required name="gender" id="gender" className="form-control">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12 col-md-4">
            <label htmlFor="age" className="form-label">Age</label>
            <input onChange={handleChange} type="number" name="age" placeholder="Your Age" className="form-control" />
          </div>
          <div className="form-group col-12 col-md-4">
            <label htmlFor="profession" className="form-label">Profession</label>
            <input onChange={handleChange} type="text" name="profession" placeholder="Your Profession" className="form-control" />
          </div>
          <div className="form-group col-12 col-md-4">
            <label htmlFor="location" className="form-label">Location</label>
            <input onChange={handleChange} type="text" name="location" placeholder="Your Location" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12 col-md-4">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input onChange={handleChange} type="phone" name="phone" placeholder="+54 123 456" className="form-control" />
          </div>
          <div className="form-group col-12 col-md-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={handleChange} type="email" name="email" placeholder="Your Email" className="form-control" />
          </div>
          <div className="form-group col-12 col-md-4">
            <label htmlFor="address" className="form-label">Address</label>
            <input onChange={handleChange} type="text" name="address" placeholder="Your Address" className="form-control" />
            {errors.address && <small className="error">{errors.address}</small>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12">
            <label htmlFor="description" className="form-label">Describe Yourself</label>
            <textarea onChange={handleChange} name="description" id="description" rows="6" className="form-control"></textarea>
          </div>
        </div>    
    </>
  )
}

export default General