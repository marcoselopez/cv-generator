import { useContext } from "react";
import AuthContext from "../../auth/AuthContext";


const General = () => {
  const {
    curriculum, 
    errors, 
    handleChange, 
    handleChangeRequired, 
    handleChangeEmail,
    handleChangePhone
  } = useContext(AuthContext);

  const {
    firstName,
    lastName,
    email,
    phone,
    profession,
    nationality,
    description
  } = curriculum;

  return (
    <>
      <h1 className="title">General Details</h1>
        <div className="form-row">
          <div className="form-group col-12 col-md-4">
            <label htmlFor="firstName" className="form-label">First Name <small className="mini-label">(Required)</small></label>
            <input  
              required
              onChange={handleChangeRequired} 
              type="text" 
              name="firstName" 
              placeholder="Your First Name" 
              className="form-control"
              minLength={4}
              maxLength={25}
              value={firstName}
            />
            {errors.firstName && <small className="error">{errors.firstName}</small>}
          </div>
          <div className="form-group col-12 col-md-4">
            <label htmlFor="lastName" className="form-label">Last Name <small className="mini-label">(Required)</small></label>
            <input
              required
              onChange={handleChangeRequired} 
              type="text" 
              name="lastName" 
              placeholder="Your Last Name" 
              className="form-control"
              minLength={4}
              maxLength={25}
              value={lastName}
            />
            {errors.lastName && <small className="error">{errors.lastName}</small>}
          </div>          
          <div className="form-group col-12 col-md-4">
            <label htmlFor="email" className="form-label">Email <small className="mini-label">(Required)</small></label>
            <input
              required 
              onChange={handleChangeEmail} 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              className="form-control"
              minLength={10}
              maxLength={30}
              value={email}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12 col-md-4">
            <label htmlFor="phone" className="form-label">Phone <small className="mini-label">(Required)</small></label>
            <input
              required
              onChange={handleChangePhone} 
              type="phone" 
              name="phone" 
              placeholder="+54123456" 
              className="form-control"
              minLength={7}
              maxLength={15}
              value={phone}
            />
            {errors.phone && <small className="error">{errors.phone}</small>}
          </div>
          <div className="form-group col-12 col-md-4">
            <label htmlFor="profession" className="form-label">Profession <small className="mini-label">(Required)</small></label>
            <input
              required 
              onChange={handleChangeRequired} 
              type="text" 
              name="profession" 
              placeholder="Your Profession" 
              className="form-control"
              minLength={4}
              maxLength={25}
              value={profession} 
            />
            {errors.profession && <small className="error">{errors.profession}</small>}
          </div>
          <div className="form-group col-12 col-md-4">
            <label htmlFor="nationality" className="form-label">Nationality <small className="mini-label">(Optional)</small></label>
            <input 
              onChange={handleChange} 
              type="text" 
              name="nationality" 
              placeholder="Your Nationality" 
              className="form-control"
              minLength={4}
              maxLength={25}
              value={nationality} 
            />
            {errors.nationality && <small className="error">{errors.nationality}</small>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-12">
            <label htmlFor="description" className="form-label">Describe Yourself</label>
            <textarea
              onChange={handleChangeRequired} 
              name="description" 
              id="description" 
              rows="6" 
              className="form-control"
              minLength={200}
              maxLength={300}
              value={description}
            >
            </textarea>
            {errors.description && <small className="error">{errors.description}</small>}
          </div>
        </div>    
    </>
  )
};

export default General;