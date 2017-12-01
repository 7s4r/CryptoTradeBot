import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ title, body, ...props }) => {
  return (
    <div {...props}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Post
