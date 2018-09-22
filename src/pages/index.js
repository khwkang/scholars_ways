import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {Hero} from '../components/homepage/Hero'
import {ClinicHighlight} from '../components/homepage/ClinicHighlight'
import {TrainingHighlight} from '../components/homepage/TrainingHighlight'
import BackToTop from '../components/homepage/BackToTop'
import {LibraryHighlight} from '../components/homepage/LibraryHighlight';


export const IndexPage = () => (
  <Container id="index_page">
    <Hero />
    <ClinicHighlight />
    <TrainingHighlight />
    <LibraryHighlight />
  </Container>
)
export default IndexPage

export const Container = styled('div')`
  position: absolute;
`

{/* <BackToTop /> */}