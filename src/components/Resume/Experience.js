import React from "react"
import "./cv.css"

const Experience = () => {
  return (
    <div className="section">
      <div className="heading">
        <div className="sectiontitle">Experience</div>
      </div>
      <div className="paragraph PARAGRAPH_EXPR firstparagraph ">
        <div className="singlecolumn">
          <span className="paddedline padb5 txtRglr">
            <span className="jobtitle">Arkdev - Frontend Developer</span>
            <span className="sprtr"> / </span>
            <span className="companyname">Arkdev</span>
            <span> - </span>
            <span className="joblocation jobcity">Heliopolis</span><span>, </span>
            <span className="joblocation jobstate">Cairo</span>
            <span className="datesWrapper txtItl">
              <span className="jobdates">10/2016</span>
              <span> - </span>
              <span className="jobdates">Current</span>
            </span>
          </span>
          <div className="jobline">
            <ul>
              <li>Created landing pages, dashboards and web applications using HTML, CSS and Javascript</li>
              <li>Redesigned sites to enhance navigation and improve visual appeal</li>
              <li>Troubleshot, tested and remedied identified issues before software deployment</li>
              <li>Coded user-customizable applications from design to easy to use sites</li>
              <li>Designed, built and maintained complete Laravel, Drupal, WordPress, React and Magento websites</li>
              <li>Validated code for proper structuring, security and compatibility with different browsers, devices or
                operating systems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
