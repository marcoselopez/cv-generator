import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css'


const Home = () => {
  const navigate = useNavigate();

  const [curriculum, setCurriculum] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    profession: "",
    location: "",
    phone: "",
    email: "",
    address: "",
    description: "",
    github: "",
    linkedin: "",
    portfolio: "",
    primaryEducation: "",
    schoolName: "",
    primaryStartingDate: "",
    primaryEndingDate: "",
    highSchoolDegree: "",
    highSchoolName: "",
    highSchoolStartingDate: "",
    highSchoolEndingDate: "",
    universityDegree: "",
    universityName: "",
    universityStartingDate: "",
    universityEndingDate: "",
    firstExperience: "",
    firstCompanyName: "",
    firstJobStartingDate: "",
    firstJobEndingDate: "",
    firstJobDescription: "",
    secondExperience: "",
    secondCompanyName: "",
    secondJobStartingDate: "",
    secondJobEndingDate: "",
    secondJobDescription: "",
    thirdExperience: "",
    thirdCompanyName: "",
    thirdJobStartingDate: "",
    thirdJobEndingDate: "",
    thirdJobDescription: "",
    skills: ""
  });


  const handleChange = (e) => {
    setCurriculum(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/login', {state: curriculum})
  }

  return (
    <div className="container mt-5 mb-5">
      <form onSubmit={handleSubmit} className="form-section">
        {/* GENERAL SECTION  */}
        <h1 className="title">General Details</h1>
        <div className="form-row">
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input onChange={handleChange} type="text" name="firstName" placeholder="Your First Name" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input onChange={handleChange} type="text" name="lastName" placeholder="Your Last Name" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="gender" className="form-label">Gender</label>
            <select onChange={handleChange} required name="gender" id="gender" className="form-control">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="age" className="form-label">Age</label>
            <input onChange={handleChange} type="number" name="age" placeholder="Your Age" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="profession" className="form-label">Profession</label>
            <input onChange={handleChange} type="text" name="profession" placeholder="Your Profession" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="location" className="form-label">Location</label>
            <input onChange={handleChange} type="text" name="location" placeholder="Your Location" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input onChange={handleChange} type="phone" name="phone" placeholder="+54 123 456" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input onChange={handleChange} type="email" name="email" placeholder="Your Email" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="address" className="form-label">Address</label>
            <input onChange={handleChange} type="text" name="address" placeholder="Your Address" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-sm-12">
            <label htmlFor="description" className="form-label">Describe Yourself</label>
            <textarea onChange={handleChange} name="description" id="description" rows="6" className="form-control"></textarea>
          </div>
        </div>
        {/* SOCIAL SECTION  */}
        <h1 className="title">Social Details</h1>
        <div className="form-row">
          <div className="form-group col-md-8 col-sm-12">
            <label htmlFor="github" className="form-label">Github</label>
            <input onChange={handleChange} type="text" name="github" placeholder="Username" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8 col-sm-12">
            <label htmlFor="linkedin" className="form-label">LinkedIn</label>
            <input onChange={handleChange} type="text" name="linkedin" placeholder="Username" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-8 col-sm-12">
            <label htmlFor="portfolio" className="form-label">Personal Portfolio</label>
            <input onChange={handleChange} type="text" name="portfolio" placeholder="URL" className="form-control" />
          </div>
        </div>
        {/* EDUCATIONAL SECTION  */}
        <h1 className="title">Educational Details</h1>
        <h3 className="title">Primary Education</h3>
        <div className="form-row">
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="primaryEducation" className="form-label">Primary Education Degree</label>
            <input onChange={handleChange} type="text" name="primaryEducation" placeholder="Your Degree" className="form-control" />
          </div>
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="schoolName" className="form-label">School Name</label>
            <input onChange={handleChange} type="text" name="schoolName" placeholder="Your School Name" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="primaryStartingDate" className="form-label">Starting Date</label>
            <input onChange={handleChange} type="date" name="primaryStartingDate" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="primaryEndingDate" className="form-label">Ending Date</label>
            <input onChange={handleChange} type="date" name="primaryEndingDate" className="form-control" />
          </div>
        </div>
        <h3 className="title">High School Education</h3>
        <div className="form-row">
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="highSchoolDegree" className="form-label">High School Degree</label>
            <input onChange={handleChange} type="text" name="highSchoolDegree" placeholder="Your Degree" className="form-control" />
          </div>
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="highSchoolName" className="form-label">High School Name</label>
            <input onChange={handleChange} type="text" name="highSchoolName" placeholder="Your Highschool Name" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="highschoolStartingDate" className="form-label">Starting Date</label>
            <input onChange={handleChange} type="date" name="highschoolStartingDate" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="highschoolEndingDate" className="form-label">Ending Date</label>
            <input onChange={handleChange} type="date" name="highschoolEndingDate" className="form-control" />
          </div>
        </div>
        <h3 className="title">University Education</h3>
        <div className="form-row">
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="universityDegree" className="form-label">University Degree</label>
            <input onChange={handleChange} type="text" name="universityDegree" placeholder="Your University Degree" className="form-control" />
          </div>
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="universityName" className="form-label">University Name</label>
            <input onChange={handleChange} type="text" name="universityName" placeholder="Your University Name" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="universityStartingDate" className="form-label">Starting Date</label>
            <input onChange={handleChange} type="date" name="universityStartingDate" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="universityEndingDate" className="form-label">Ending Date</label>
            <input onChange={handleChange} type="date" name="universityEndingDate" className="form-control" />
          </div>
        </div>
        {/* PROFESSIONAL EXPERIENCE SECTION  */}
        <h1 className="title">Professional Experience Details</h1>
        <div className="form-row">
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="firstExperience" className="form-label">1st Experience</label>
            <input onChange={handleChange} type="text" name="firstExperience" placeholder="Title" className="form-control" />
          </div>
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="firstCompanyName" className="form-label">Company Name</label>
            <input onChange={handleChange} type="text" name="firstCompanyName" placeholder="Name of the Company" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="firstJobStartingDate" className="form-label">Starting Date</label>
            <input onChange={handleChange} type="date" name="firstJobStartingDate" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="firstJobEndingDate" className="form-label">Ending Date</label>
            <input onChange={handleChange} type="date" name="firstJobEndingDate" className="form-control" />
          </div>
          <div className="form-group col-sm-12">
            <label htmlFor="firstJobDescription" className="form-label">Describe your position</label>
            <textarea onChange={handleChange} name="firstJobDescription" id="first-job-description" rows="6" className="form-control"></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="secondExperience" className="form-label">2nd Experience</label>
            <input onChange={handleChange} type="text" name="secondExperience" placeholder="Title" className="form-control" />
          </div>
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="secondCompanyName" className="form-label">Company Name</label>
            <input onChange={handleChange} type="text" name="secondCompanyName" placeholder="Name of the Company" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="secondJobStartingDate" className="form-label">Starting Date</label>
            <input onChange={handleChange} type="date" name="secondJobStartingDate" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="secondJobEndingate" className="form-label">Ending Date</label>
            <input onChange={handleChange} type="date" name="secondJobEndingate" className="form-control" />
          </div>
          <div className="form-group col-sm-12">
            <label htmlFor="secondJobDescription" className="form-label">Describe your position</label>
            <textarea onChange={handleChange} name="secondJobDescription" id="second-job-description" rows="6" className="form-control"></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="thirdExperience" className="form-label">3rd Experience</label>
            <input onChange={handleChange} type="text" name="thirdExperience" placeholder="Title" className="form-control" />
          </div>
          <div className="form-group col-md-6 col-sm-12">
            <label htmlFor="thirdCompanyName" className="form-label">Company Name</label>
            <input onChange={handleChange} type="text" name="thirdCompanyName" placeholder="Name of the Company" className="form-control" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="thirdJobStartingDate" className="form-label">Starting Date</label>
            <input onChange={handleChange} type="date" name="thirdJobStartingDate" className="form-control" />
          </div>
          <div className="form-group col-md-4 col-sm-12">
            <label htmlFor="thirdJobEndingDate" className="form-label">Ending Date</label>
            <input onChange={handleChange} type="date" name="thirdJobEndingDate" className="form-control" />
          </div>
          <div className="form-group col-sm-12">
            <label htmlFor="thirdJobDescription" className="form-label">Describe your position</label>
            <textarea onChange={handleChange} name="thirdJobDescription" id="third-job-description" rows="6" className="form-control"></textarea>
          </div>
        </div>
        {/* SKILLS SECTION  */}
        <h1 className="title">Your Skills</h1>
        <div className="form-row">
          <div className="form-group col-sm-12">
            <label htmlFor="skills" className="form-label">Tell us about your skills</label>
            <textarea onChange={handleChange} name="skills" id="skills" rows="6" className="form-control" placeholder="e.g HTML, CSS, REACT, Etc."></textarea>
          </div>
        </div>
        <button className="py-3 my-3 btn btn-dark col-sm-12 form-button">GENERATE MY CV</button>
      </form>
    </div>
  )
}

export default Home