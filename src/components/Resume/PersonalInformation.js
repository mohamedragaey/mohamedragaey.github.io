import React from "react"
import "./cv.css"

const PersonalInformation = () => {
  return (
    <div className="name-contact">
      <div className="section SECTION_NAME nameSec">
        <div className="paragraph PARAGRAPH_NAME firstparagraph ">
          <div className="monogram">
            <svg viewBox=" 0 0  67  64 "
                 enableBackground="0 0 67 64">
              <rect x="0px" y="0px" width="67px" height="64px"
                    stroke="#ffffff" fill="none"
                    strokeWidth="1px"/>
              <text id="SUBSTR_FALN" textAnchor="middle" x="34px"
                    y="42px" fill="#ffffff" fontSize="20px">MR
              </text>
            </svg>
          </div>
          <div className="name">
            <span className="field">Mohamed Ragaey</span>
          </div>
        </div>
      </div>
      <div className="section SECTION_CNTC  border-top-0">
        <div className="paragraph PARAGRAPH_CNTC firstparagraph ">
          <div className="address">
            <span className="field">mohamedragaey33@gmail.com</span>
            <span className="sprtr"> / </span>
            <span>H: </span><span className="field">01021670450</span>
            <div>
              <span className="field">10 Abd EL hay Hegazy</span><span>, </span>
              <span className="spaced field">Cairo</span><span>, </span>
              <span className="spaced field">Nasr City</span><span> </span>
              <span className="spaced field">11762</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInformation
