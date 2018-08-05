import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MobileNav from '../components/navigation/MobileNav'
import Navbar from '../components/navigation/Navbar'
import '../css/global.sass'

const TemplateWrapper = ({ children }) => (
  <div id="template_wrapper" className="columns is-desktop custom_scroll">
    <Helmet title="Scholars Ways | Daoist Art of Cultivation" />
    <MobileNav />
    <Navbar />  
    <div className="children_wrapper column">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
