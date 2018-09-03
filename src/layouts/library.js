import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Layout } from '../components/Layout/index.styled'

const TemplateWrapper = ({ children }) => (
  <Layout>
    <Helmet title="Scholars Ways | Daoist Art of Cultivation" />
    {children()}
  </Layout>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
