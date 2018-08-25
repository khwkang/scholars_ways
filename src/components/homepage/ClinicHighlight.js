import React from 'react'
import Link from 'gatsby-link'
import { 
  Container, 
  Columns, 
  Column, 
  ColumnBG, 
  Content, 
  Title, 
  Text 
} from './Highlight.styled';

export default class ClinicHighlight extends React.Component {
  render() {
    return (
      <Container>
        <Columns>
          <Column>
            <Content>     
              <Title>
                Acupunture Clinic
              </Title>       
              <Text>
              Oriental medicine is a thorough and gentle approach to healing. Each patient brings a unique clinical picture to the practitioner and receives treatment tailored to his or her specific needs. This natural form of healing is non-invasive and safe.
              </Text>
              <Link to="/clinic/expertise">
                <button className="button is-large">Learn More</button>
              </Link>            
            </Content>
          </Column>  
          <Column className={ColumnBG}/>      
        </Columns>
      </Container>
    )
  }
}