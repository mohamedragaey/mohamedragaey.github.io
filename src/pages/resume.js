import React from "react"
import { Link } from "react-router-dom"
import SEO from "../components/seo"
import CV from "../components/Resume"

const Resume = () => (
  <>
    <SEO title="Resume"/>
    <CV/>
    <Link className='no-print' to="/">Go back to the homepage</Link>
  </>
)

export default Resume
