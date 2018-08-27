import React from 'react'
import { chunk } from 'lodash'
// import {Content} from '../general.styled'
import { List, ListContainer, SubTitle } from '../clinic/Expertise.styled'

export const Expertise = ({specialties, expertise}) => {
  const GroupedSpecialties = chunk(specialties, 3)
  const GroupedExpertise = chunk(expertise, 3)
  console.log(GroupedSpecialties)
  const style = {
    marginTop: '3rem'
  }
  return (
    <div>
      <SubTitle>
        Common Scope of Practice
      </SubTitle>
      <ListContainer>
        {GroupedSpecialties.map(list => (
          <List>
            {list.map(item => (
              <li>
                {item} 
              </li>   
            ))}
          </List>   
        ))}
      </ListContainer>
      <SubTitle style={style}>
        Treatment | Diagnosis Methods
      </SubTitle>
      <ListContainer>
        {GroupedExpertise.map(list => (
          <List>
            {list.map(item => (
              <li>
                {item} 
              </li>   
            ))}
          </List>   
        ))}
      </ListContainer>
    </div>
  )
}

