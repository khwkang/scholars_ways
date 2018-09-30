import React from 'react'
import { get, chunk } from 'lodash'
import { List, ListContainer, SubTitle, Container, PageTitle } from './Expertise.styled'

export const Expertise = ({ data }) => {  
  const GroupedSpecialties = chunk((get(data, 'specialties')), 3)
  const GroupedExpertise = chunk((get(data, 'expertise')), 3)
  const style = {
    marginTop: '3rem',
  }
  return (
    <Container>
      <PageTitle>{get(data, 'title')}</PageTitle>
      <SubTitle>Common Scope of Practice</SubTitle>
      <ListContainer>
        {GroupedSpecialties.map(list => (
          <List>
            {list.map(item => (
              <li>{item}</li>
            ))}
          </List>
        ))}
      </ListContainer>
      <SubTitle style={style}>Treatment | Diagnosis Methods</SubTitle>
      <ListContainer>
        {GroupedExpertise.map(list => (
          <List>
            {list.map(item => (
              <li>{item}</li>
            ))}
          </List>
        ))}
      </ListContainer>
    </Container>
  )
}

export const query = graphql`
  fragment Expertise on Query {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {        
        title            
        specialties
        expertise
      } 
    }    
  }
`