import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../css/global.sass'

const TemplateWrapper = ({ children }) => (
  <div id="library_template_wrapper">
    <Helmet title="Scholars Ways | Daoist Art of Cultivation" />
    <div className="children_wrapper">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
