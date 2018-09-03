import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const RawContent = ({ content, className }) => (
  <div className={className}>{content}</div>
)

RawContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
}

HTMLContent.propTypes = RawContent.propTypes

export default RawContent
