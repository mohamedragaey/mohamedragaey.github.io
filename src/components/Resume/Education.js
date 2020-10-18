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
            <span className="programline">computer science</span>
            <span className="datesWrapper txtItl">
              <span className="jobdates">2016</span>
            </span>
          </span>
          <span className="field">Benha Faculty of computer and informatics</span>
        </div>
      </div>
      <div className="paragraph">
        <div>
          <span className="paddedline">
                        <span className="paddedline">
                            <span className="companyname companyname_educ">Udacity</span>
                            <span className="hyphen"> - </span>
                            <span className="joblocation jobcity">Online Courses Website</span>
                            <span className="datesWrapper txtItl">
                                <span className="jobdates">2019</span>
                            </span>
                        </span>
                        <span className="degree" id="FIELD_DGRE">React Nanodegree</span>
                        <span>: </span>
                        <span className="programline" id="FIELD_STUY">Web Development</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Education
