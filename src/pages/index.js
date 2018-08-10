import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Hero from '../components/homepage/Hero'
import ClinicHero from '../components/homepage/ClinicHero'
import QigongHero from '../components/homepage/QigongHero'
import BackToTop from '../components/homepage/BackToTop'


export default class IndexPage extends React.Component {
  render() {
    return (
      <section id="index_page">
          <Hero />
          <ClinicHero />
          <QigongHero />
          <BackToTop />
      </section>
    )
  }
}