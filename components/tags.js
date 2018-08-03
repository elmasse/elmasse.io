import React from 'react'
import styled from 'react-emotion'

export default ({ tags }) => {
  tags = [].concat(tags) // might be ['tag'] or 'tag'
  return (
    <div>
      {tags.length &&
        tags.map(tag => <Tag key={`tag-${tag}`}>{tag}</Tag>)
      }
    </div>
  )
}

const Tag = styled('span')`
  background: #0af;
  padding: 5px 10px;
  margin: 2px;
  font-size: .8em;  
  color: #fff;
`
