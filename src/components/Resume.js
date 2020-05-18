import React, { Component } from 'react';
import logo from '../components/curriculum-vitae.png';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date"> {item.YearOfPassing}</em></p>
                          <p className="info">
                              {item.marks}
                              <span>&bull;</span> <em className="date"> {item.Achievements}</em>
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date"> {item.YearOfJoining}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>
          <div className="row work">
              <div className="three columns header-col">
                  <h1><span>Skills</span></h1>
              </div>

              <div className="nine columns main-col">
                  {
                      resumeData.skills && resumeData.skills.map((item) => {
                          return(
                              <div className="row item">
                                  <div className="twelve columns">
                                      <p className="info">
                                      <span>&bull;</span> <em> {item.skillname}</em>
                                      </p>
                                  </div>

                              </div>

                          )
                      })
                  }
              </div>
          </div>
          <div className="row work">
              <div className="three columns header-col">
                  <img  src="https://drive.google.com/uc?export=view&id=1PlE56gWsfD_beDVpjlvRJx0BYmvEX_B6" alt="" />
                  <h5 >
                      <span>
                      Achievements
                      </span>
                  </h5>
              </div>
              <p className="info">
              <div className="nine columns main-col">
                  <p align="justify">
                      {
                          resumeData.achieve1
                      }
                  </p>
                      <p align="justify">
                          {
                              resumeData.achieve2
                          }
                      </p>
                      <p align="justify">
                          {
                              resumeData.achieve3
                          }
                      </p>
                      <p align="justify">
                          {
                              resumeData.achieve4
                          }
                      </p>
                      <p align="justify">
                          {
                              resumeData.achieve5
                          }
                     </p>
                  <p align="justify">
                      {
                          resumeData.achieve6
                      }
                  </p>
              </div>
              </p>
          </div>
          <div className="row work">
              <div className="three columns header-col">
                  <img  src="https://drive.google.com/uc?export=view&id=1b6GJTz0eTKylIz9U0i9oEHqGDsjg2vpe" alt="" />
                  <h5><span>
                      Certificates
                      </span>
                  </h5>
              </div>
              <p className="info">
                  <div className="nine columns main-col">
                      <ul className="social">
                          {
                              resumeData.social && resumeData.social.map(item =>{
                                      return(

                                          <li key={item.name}>
                                              {item.achieve}
                                              <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                          </li>

                                      )
                                  }
                              )
                          }
                      </ul>
                  </div>
              </p>
          </div>
          <div className="row work">
              <div className="three columns header-col">
                  <h1><span>Download CV</span></h1>
              </div>
              <p className="info">
                  <div className="nine columns main-col">
                      {
                          <a href={"https://drive.google.com/file/d/1AtQX3xqco0sIKQiiw0bjCtO8rlM18JOY/preview"}
                             target="_blank">
                              <img src={logo} alt="" width={50} height={50}/>
                          </a>
                      }
                  </div>
              </p>
          </div>

      </section>
    );
  }
}