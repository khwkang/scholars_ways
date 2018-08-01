import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/layout/Navbar'
import '../css/global.sass'

const TemplateWrapper = ({ children }) => (
  <div className="columns is-desktop custom_scroll">
    <Helmet title="Scholars Ways | Daoist Art of Cultivation" />
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
