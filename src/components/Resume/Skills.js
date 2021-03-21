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
                  <li>HTML, CSS , SCSS , LESS</li>
                  <li>Jquery, Javascript</li>
                  <li>React, NextJs, React Native</li>
                  <li>Bootstrap</li>
                  <li>SVG Animation</li>
                </ul>
              </td>
              <td className="field">
                <ul>
                  <li>BEM methodology</li>
                  <li>Webpack, Gulp, Grunt, Yarn, NPM</li>
                  <li>Photoshop</li>
                  <li>Adope Xd</li>
                  <li>Zeplin, Sketch, Figma</li>
                </ul>
              </td>
              <td className="field">
                <ul>
                  <li>Magento</li>
                  <li>Drupal 8</li>
                  <li>WordPress</li>
                  <li>Laravel</li>
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
