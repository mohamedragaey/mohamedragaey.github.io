import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Resume from "../components/Resume"

const ResumePage = () => {
  return (
    <>
      <Layout children={<><Resume/><Link className='no-print' to="/">Go back to the homepage</Link></>}/>
    </>
  )
}

export default ResumePage
