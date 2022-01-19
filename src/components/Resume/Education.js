import React from "react"
import "./cv.css"

const Education = () => {
  return (
    <div className="section">
      <div className="heading">
        <div className="sectiontitle">Education and Training</div>
      </div>
      <div className="paragraph firstparagraph">
        <div>
          <span className="paddedline">
            <span className="degree">B.S</span><span>: </span>
            <span className="programline">Communication Engineering. - <b>Grade(Good 72.5%)</b></span>
            <span className="datesWrapper txtItl">
              <span className="jobdates">2021</span>
            </span>
          </span>
          <span className="field">Benha Faculty of Engineering</span>
          <div className="field" style={{ marginTop: "16px" }}>Graduation project <b>Grade(Excellent)</b></div>
        </div>
      </div>
      <div className="paragraph">
        <div>
          <span className="paddedline">
                        <span className="paddedline">
                            <span className="companyname companyname_educ">Huawei Academy</span>
                            <span className="hyphen"> - </span>
                            <span className="joblocation jobcity">Online Courses Website</span>
                            <span className="datesWrapper txtItl">
                                <span className="jobdates">2021</span>
                            </span>
                        </span>
                        <span className="degree" id="FIELD_DGRE">HCIA-Routing&Switching</span>
                        <span>: </span>
                        <span className="programline" id="FIELD_STUY">Communication and computer science</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Education
