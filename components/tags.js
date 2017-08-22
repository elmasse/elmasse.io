import React from 'react'
import styled from 'emotion/react'

export default ({ tags }) => {
  tags = [].concat(tags) // might be ['tag'] or 'tag'
  return (
    tags.length &&
    <div>
      {
        tags.map(tag => <Tag key={`tag-${tag}`}>{tag}</Tag>)
      }
    </div>
  )
}

const Tag = styled('span')`
  background: #e5e5e5;
  padding: 5px 10px;
  margin: 2px;
  font-size: .8em;
  font-weight: 100;
`