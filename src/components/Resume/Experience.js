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
            <span className="jobtitle"> Smart Parking system and IPS.</span>
            <span className="sprtr"> / </span>
            <span className="companyname">Graduation Project:</span>
            <span> - </span>
            <span className="joblocation jobcity">Benha</span><span>, </span>
            <span className="joblocation jobstate">Qalyubia</span>
            <span className="datesWrapper txtItl">
              <span className="jobdates">7/2021</span>
            </span>
          </span>
          <div className="jobline">
            <ul>
              <li>ARM & IOT based project.</li>
              <li>Parking system: Using ARM STM32 interfaced with ESP 32 WIFI module to send data to web application
                and IR sensors.</li>
              <li>It collects IR sensors reading from slots and detect if there is car or no, and sends the data using ESP8266 WIFI
                module and HTTP protocol services to a Web application.</li>
              <li>STM32 microcontroller control the ESP module through UART communication protocol and with help of a wide
                range of AT commands to connect to the web server and send the sensors data. </li>
              <li>Indoor positioning system: Using ESP 32 Bluetooth module as BLE (low energy Bluetooth) beacons.</li>
              <li>the ESP sends frames to a mobile application and by some algorithm and mapping , it directs the user to his
                destination.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
