import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Hero from '../components/homepage/Hero'
import ClinicHero from '../components/homepage/ClinicHero'
import TrainingHero from '../components/homepage/TrainingHero'
import BackToTop from '../components/homepage/BackToTop'
import WorkshopHero from '../components/homepage/WorkshopHero';


export const IndexPage = () => (
  <section id="index_page">
      <Hero />
      <ClinicHero />
      <TrainingHero />
      <WorkshopHero/>
      <BackToTop />
  </section>
)
export default IndexPage