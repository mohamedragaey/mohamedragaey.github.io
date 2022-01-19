import React from "react"
import "./cv.css"

const Skills = () => {
  return (
    <div className="section">
      <div className="heading">
        <div className="sectiontitle">Skills</div>
      </div>
      <div className="paragraph PARAGRAPH_HILT firstparagraph ">
        <div className="singlecolumn maincolumn">
          <table className="twocol">
            <tbody>
            <tr>
              <td className="field">
                <ul>
                  <li>Huawei eNSP</li>
                  <li>Matlab</li>
                  <li>Proteus</li>
                  <li>Packet tracer</li>
                  <li>Microsoft office package</li>
                </ul>
              </td>
              <td className="field">
                <ul>
                  <li>Team player</li>
                  <li>Self Learner</li>
                  <li>Presentation skills</li>
                  <li>Communication skills</li>
                </ul>
              </td>
              <td className="field">
                <ul>
                  <li>C++ Programming Language</li>
                </ul>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Skills
