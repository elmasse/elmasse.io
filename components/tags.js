import React from 'react'

export default ({ tags }) => {
  tags = [].concat(tags) // might be ['tag'] or 'tag'
  return (
    tags.length &&
    <div>
      {
        tags.map(tag => <span key={`tag-${tag}`}> | {tag}</span>)
      }
    </div>
  )
}
