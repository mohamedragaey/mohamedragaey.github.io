import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import CV from "../components/cv"

const Resume = () => (
  <>
    <SEO title="Resume"/>
    <CV/>
    <Link className='no-print' to="/">Go back to the homepage</Link>
  </>
)

export default Resume
