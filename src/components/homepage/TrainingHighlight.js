import React from 'react'
import Link from 'gatsby-link'
import { 
  Container, 
  Columns, 
  Column, 
  ColumnBG, 
  Content, 
  Title, 
  Text,
} from './Highlight.styled';

export default class TrainingHighlight extends React.Component {
  render() {
    return (
      <Container>
        <Columns>
          <Column className={ColumnBG}/>    
          <Column>
            <Content>     
              <Title>
                Training
              </Title>       
              <Text>
                Qigong is the art of exercising the flow of qi throughout the body’s meridians (energy channels). Qigong combines all the benefits of resistance and stretching exercises. However, unlike other forms of resistance exercises, Scholars Way Qigong stresses the importance of a “push and pull” concept to improve the overall balance of the muscles
              </Text>
              <Link to="/library">
                <button className="button is-large">Learn More</button>
              </Link>            
            </Content>
          </Column>    
        </Columns>
      </Container>
    )
  }
}