import React from "react"
import "./cv.css"

const FreelanceProjects = () => {
  return (
    <div className="section">
      <div className="heading">
        <div className="sectiontitle">Freelance Projects</div>
      </div>
      <div className="paragraph firstparagraph ">
        <div className="singlecolumn">
          <ul>
            <li><u><strong>Elbalto</strong></u> - Mobile based application for medical
              services.[https://elbalto.com/]
            </li>
            <li><u><strong>Google Store</strong></u> - Mobile Store
              accessories.[http://googlestore-eg.com/]
            </li>
            {/*<li><u><strong>IBite Store</strong></u> - Magento Online store for All Apple "Mac &amp;*/}
            {/*iPhone" Accessories.[https://ibitestore.com]*/}
            {/*</li>*/}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FreelanceProjects
