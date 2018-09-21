import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Layout } from '../components/Layout/index.styled'

const TemplateWrapper = ({ children }) => (
  <h1>Site under construction</h1>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
