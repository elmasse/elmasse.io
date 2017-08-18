import React from 'react'
import Moment from 'react-moment'

import withPost, { Content } from 'nextein/post'

import Tags from '../components/tags'

const Post = withPost(({ post }) => {
  const { title, category, tags, date } = post.data
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <Moment format="MMMM D, YYYY">{date}</Moment>
        <Tags tags={tags} />
      </div>
      <Content {...post} />
    </div>
  )
})

export default Post