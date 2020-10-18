import React from "react"
import "./cv.css"
import PersonalInformation from "./PersonalInformation"
import Summary from "./Summary"
import Skills from "./Skills"
import Experience from "./Experience"
import Accomplishments from "./Accomplishments"
import FreelanceProjects from "./FreelanceProjects"
import Education from "./Education"
import Interests from "./Interests"
import Languages from "./Languages"
import SocialProfiles from "./SocialProfiles"
import Certifications from "./Certifications"

const Resume = () => {
  return (
    <>
      <div id="document" className="fontsize fontface vmargins hmargins">
        <PersonalInformation/>
        <Summary/>
        <Skills/>
        <Experience/>
        <Accomplishments/>
        <FreelanceProjects/>
        <Education/>
        <Interests/>
        <Languages/>
        <SocialProfiles/>
        <Certifications/>
      </div>
    </>
  )
}

export default Resume
