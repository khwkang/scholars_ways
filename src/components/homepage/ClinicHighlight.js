import React from 'react'
import Link from 'gatsby-link'
import library_highlight_bg from '../../img/library_highlight_bg.jpg'

import { 
  Container, 
  Columns, 
  Column, 
  ColumnBG, 
  Content, 
  Title, 
  Text 
} from './Highlight.styled';

export const ClinicHighlight = () => (
  <Container id='clinic_highlight'>
    <Columns>
      <Column>
        <Content>     
          <Title>
            Acupunture Clinic
          </Title>       
          <Text>
            Scholars Way is a place to Heal, Nourish, Balance the Body and Mind, dedicated to heal the whole being. 
            At Scholars Way clinic, we believe that good health care should be supportive of Physical and Emotional Well-being, and should include diet and lifestyle counseling. 
            The method of treatment we use include Acupuncture, Pulse Diagnosis, Moxibustion, Herbal Tonics, Qigong, and Health Consultation. 
            With a personally tailored treatment plan, we strive to Heal, Fast Recovery, Strengthen and Well-being of all our patients.
          </Text>
          <Link to="/clinic/expertise">
            <button>Appointment</button>
          </Link>            
        </Content>
      </Column>  
      <Column style={{ backgroundImage: `url(${library_highlight_bg})`}} className={ColumnBG}/>      
    </Columns>
  </Container>
)
