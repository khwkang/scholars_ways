import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {Layout, Container} from '../components/Layout/index.styled'
import {Mobile} from '../components/navigation/Mobile'
import {Navbar} from '../components/navigation/Navbar'
import { injectGlobal } from 'emotion'
import t from '../theme'

// import 'modern-normalize'

// import '../css/global.sass'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Abhaya+Libre:400|Barlow+Condensed:700,600,400|Lato:300,400');

  * {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    color: ${t.c.bodygray};
    font-size: ${t.f(1)};
  }
  h1 {
    font-size: ${t.f(5)};
    font-weight: 700;
  }
  h2 {
    font-size: ${t.f(2)};
    font-weight: 700;
  }

  button {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    border-radius: 0.3rem;
    background-color: ${t.c.nav};
    color: white;
    font-weight: 700;
    border: none;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`

const TemplateWrapper = ({ children }) => (
  <Layout>
    <Helmet title="Scholars Ways | Daoist Art of Cultivation" />
    <Mobile />
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
