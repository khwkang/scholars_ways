import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div className="columns is-desktop">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />  
    <div className="column is-10 is-offset-2">
    {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
