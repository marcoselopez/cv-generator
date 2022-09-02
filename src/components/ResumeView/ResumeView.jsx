import { useLocation } from 'react-router-dom';
import './resumeView.css'

const ResumeView = () => {
  const location = useLocation();
  const state = location.state

  const space = '25';

  return (
    <div className="container my-5">
      <div className="resume-view">
        {/* SIDEBAR */}
        <div className="animate__animated animate__fadeIn resume-sidebar col-md-3 col-sm-12">
          <div className="resume-profile">
            <img className="resume-profile-pic mt-4" src="https://picsum.photos/400" alt="" />
            <p className="resume-name text-center mt-2">{state.firstName.toUpperCase()} {state.lastName.toUpperCase()}</p>
            <p className="resume-profession">{state.profession.toUpperCase()}</p>
            <p className="resume-nationality">{state.nationality.toUpperCase()}</p>
            <hr />
          </div>
          <div className="resume-contact-info">
            <div>
              <p className="resume-profile-section-title">CONTACT INFO</p>
              <ul>
                <li><i className="bi bi-telephone-fill"></i>{state.phone}</li>
                <li><i className="bi bi-envelope-fill"></i>{state.email}</li>
                {state.portfolio && <li><i className="bi bi-globe"></i>{state.portfolio}</li>}
                {state.linkedin && <li><i className="bi bi-linkedin"></i>{state.linkedin}</li>}
                {state.github && <li><i className="bi bi-github"></i>{state.github}</li>}
              </ul>
            </div>
            <hr />
          </div>
          <div className="resume-education-info">
            <p className="resume-profile-section-title">EDUCATION</p>
            {state.educations.map(education => (
              <>
                <p className="education-date">{education.educationStartingDate.slice(0,4)} - {education.educationEndingDate.slice(0,4)}</p>
                <p className="education-degree">{education.educationDegree}</p>
                <p className="education-institution">{education.institutionName}</p>
              </>
            ))}
          </div>
        </div>
        {/* MAIN */}
        <div className="resume-main col-md-9 col-sm-12">
          <div className="resume-section mx-4 mt-5">
            <div className="col-12">
              <h3 className="resume-section-title animate__animated animate__fadeInRight">ABOUT ME</h3>
              <p className="text-break animate__animated animate__fadeIn animate__delay-1s">{state.description}</p>
            </div>
          </div>
          <div className="resume-section row g-0 mx-4 mt-5">
            <div className="col-12">
              <h3 className="resume-section-title animate__animated animate__fadeInRight">EXPERIENCE</h3>
            </div>
            {state.experiences.map(experience => (
              <>
              <div className="col-md-2 col-sm-12 animate__animated animate__fadeIn animate__delay-1s">
                <p className="experience-date">{experience.jobStartingDate.slice(0,4)} - {experience.jobEndingDate.slice(0,4)}</p>
                <p className="experience-company">{experience.companyName}</p>
              </div>
              <div className="col-md-10 col-sm-12 animate__animated animate__fadeIn animate__delay-1s">
                <h6 className="experience-position">{experience.experiencePosition}</h6>
                <p className="text-break">{experience.jobDescription}</p>
              </div>
              </>
            ))}
          </div>
          {/* <div className="resume-section row ms-4 me-4 mt-5">
            <div className="col-12">
              <h3 className="resume-section-title">EDUCATION</h3>
            </div>
            <div className="col-2">
              <p className="education-date">2018-2020</p>
            </div>
            <div className="col-10">
              <h6 className="education-degree">DEGREE</h6>
              <p>Institution</p>
            </div>
          </div> */}
          <div className="resume-section row mx-4 mt-5 g-0">
            <h3 className="resume-section-title animate__animated animate__fadeInRight">SKILLS</h3>
            {state.skills.map(skill => (
              <>
              <div className="animate__animated animate__fadeIn animate__delay-1s col-sm-12 col-xl-6 row d-flex justify-content-center align-items-center mb-3">
                <div className="col-md-4 col-12">
                  <p className="skill-label">{skill.skillName}: </p>
                </div>
                <div className="col-md-7 col-12">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: `${skill.skillPower}%`}} aria-valuenow={skill.skillPower} aria-valuemin="0" aria-valuemax="100">{skill.skillPower}%</div>
                  </div>
                </div>
              </div>
              </>
            ))}
          </div>
          <div className="resume-section resume-interests-container mx-4 mt-5">
            <div className="col-12">
              <h3 className="resume-section-title animate__animated animate__fadeInRight">INTERESTS</h3>
              <div className="animate__animated animate__fadeIn animate__delay-1s resume-interests d-flex justify-content-center align-items-center flex-wrap">
                <span className="badge text-bg-primary">SKYING</span>
                <span className="badge text-bg-primary">MUSIC</span>
                <span className="badge text-bg-primary">GAMING</span>
                <span className="badge text-bg-primary">TECHNOLOGY</span>
                <span className="badge text-bg-primary">AEROSPATIALSTATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ResumeView;