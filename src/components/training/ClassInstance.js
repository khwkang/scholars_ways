import React from 'react'
import {get} from 'lodash'
import {HTMLContent} from '../Content'
import {Schedule} from './ClassInstance.styled'
import Link from 'gatsby-link'

export const ClassInstance = ({data}) => {

  const frontmatter = get(data, 'markdownRemark.frontmatter')
  const htmlBlurb = get(data, 'markdownRemark.html')

  console.log("xxxxx", data)
  
  return  (
    <div className="container">
      {
        get(frontmatter, 'description') && ( 
        <div>{get(frontmatter, 'description')}</div>
        )
      }
      {
        htmlBlurb && ( 
          <HTMLContent content={htmlBlurb}/>
        )
      }
      <Schedule>
        <h2>Schedule</h2>      
        <p>{data.markdownRemark.frontmatter.schedule.day}</p>
        <p>{data.markdownRemark.frontmatter.schedule.time}</p>
      </Schedule>
      <Link to="/contact">
        <button>sign up</button>
      </Link>
    </div>
  )
}
  