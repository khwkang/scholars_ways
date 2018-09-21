import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Layout, Container } from '../components/Layout/index.styled'
import { Mobile } from '../components/navigation/Mobile'
import { Navbar } from '../components/navigation/Navbar'
import 'modern-normalize'
import '../css/global'

const TemplateWrapper = ({ children }) => (
  <h1>Site under construction</h1>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
