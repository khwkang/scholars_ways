import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {Layout, Container} from '../components/Layout/index.styled'
import MobileNav from '../components/navigation/MobileNav'
import Navbar from '../components/navigation/Navbar'
import '../css/global.sass'


const TemplateWrapper = ({ children }) => (
  <Layout>
    <Helmet title="Scholars Ways | Daoist Art of Cultivation" />
    <MobileNav />
    <Navbar />  
    <Container>
      {children()}
    </Container>
  </Layout>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
