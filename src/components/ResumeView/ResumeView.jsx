import { useLocation } from 'react-router-dom';
import './resumeView.css'

const ResumeView = () => {
  const location = useLocation();

  const space = '25';

  return (
    <div className="container my-5">
      <div className="resume-view">
        {/* SIDEBAR */}
        <div className="resume-sidebar col-md-3 col-sm-12">
          <div className="resume-profile">
            <img className="resume-profile-pic mt-4" src="https://picsum.photos/400" alt="" />
            <p className="resume-name text-center mt-2">NAME LASTNAME</p>
            <p className="resume-profession">PROFESSION</p>
            <p className="resume-nationality">NATIONALITY</p>
            <hr />
          </div>
          <div className="resume-contact-info">
            <div>
              <p className="resume-profile-section-title">CONTACT INFO</p>
              <ul>
                <li><i className="bi bi-telephone-fill"></i>+ 54 9 123 456</li>
                <li><i className="bi bi-envelope-fill"></i>email.address@mail.com</li>
                <li><i className="bi bi-globe"></i>mypersonalsite.com</li>
                <li><i className="bi bi-linkedin"></i>LinkedIn</li>
                <li><i className="bi bi-github"></i>Github</li>
              </ul>
            </div>
            <hr />
          </div>
          <div className="resume-education-info">
            <p className="resume-profile-section-title">EDUCATION</p>
            <p className="education-date">2014-2020</p>
            <p className="education-degree">Education Degree</p>
            <p className="education-institution">Institution Name</p>
            <p className="education-date">2014-2020</p>
            <p className="education-degree">Education Degree</p>
            <p className="education-institution">Institution Name</p>
            <p className="education-date">2014-2020</p>
            <p className="education-degree">Education Degree</p>
            <p className="education-institution">Institution Name</p>
          </div>
        </div>
        {/* MAIN */}
        <div className="resume-main col-md-9 col-sm-12">
          <div className="resume-section mx-4 mt-5">
            <div className="col-12">
              <h3 className="resume-section-title">ABOUT ME</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate sint deserunt ipsam sit libero alias culpa corporis ullam quia facilis. Eligendi, debitis asperiores aperiam tenetur consequatur error minima commodi exercitationem.</p>
            </div>
          </div>
          <div className="resume-section row g-0 mx-4 mt-5">
            <div className="col-12">
              <h3 className="resume-section-title">EXPERIENCE</h3>
            </div>
            <div className="col-md-2 col-sm-12">
              <p className="experience-date">2018-2020</p>
              <p className="experience-company">Company</p>
            </div>
            <div className="col-md-10 col-sm-12">
              <h6 className="experience-position">POSITION</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore maxime perferendis quibusdam.</p>
            </div>
            <div className="col-md-2 col-sm-12">
              <p className="experience-date">2018-2020</p>
              <p className="experience-company">Company</p>
            </div>
            <div className="col-md-10 col-sm-12">
              <h6 className="experience-position">POSITION</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore maxime perferendis quibusdam.</p>
            </div>
            <div className="col-md-2 col-sm-12">
              <p className="experience-date">2018-2020</p>
              <p className="experience-company">Company</p>
            </div>
            <div className="col-md-10 col-sm-12">
              <h6 className="experience-position">POSITION</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita labore maxime perferendis quibusdam.</p>
            </div>
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
            <h3 className="resume-section-title">SKILLS</h3>
            <div className="col-sm-12 col-xl-6 row d-flex justify-content-center align-items-center mb-3">
              <div className="col-md-4 col-12">
                <p className="skill-label">HTML: </p>
              </div>
              <div className="col-md-7 col-12">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: `${space}%`}} aria-valuenow={space} aria-valuemin="0" aria-valuemax="100">{space}%</div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6 row d-flex justify-content-center align-items-center mb-3">
              <div className="col-md-4 col-12">
                <p className="skill-label">CSS: </p>
              </div>
              <div className="col-md-7 col-12">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: `${space*2}%`}} aria-valuenow={space} aria-valuemin="0" aria-valuemax="100">{space*2}%</div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6 row d-flex justify-content-center align-items-center mb-3">
              <div className="col-md-4 col-12">
                <p className="skill-label">JAVASCRIPT: </p>
              </div>
              <div className="col-md-7 col-12">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: `${space*3}%`}} aria-valuenow={space} aria-valuemin="0" aria-valuemax="100">{space*3}%</div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6 row d-flex justify-content-center align-items-center mb-3">
              <div className="col-md-4 col-12">
                <p className="skill-label">REACTJS: </p>
              </div>
              <div className="col-md-7 col-12">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: `${space-10}%`}} aria-valuenow={space} aria-valuemin="0" aria-valuemax="100">{space-10}%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-section resume-interests-container mx-4 mt-5">
            <div className="col-12">
              <h3 className="resume-section-title">INTERESTS</h3>
              <div className="resume-interests d-flex justify-content-center align-items-center flex-wrap">
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