import React from 'react'

import withPosts, { sortByDate } from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'

const Index = withPosts(({ posts }) => {
  posts.sort(sortByDate)
  return (
    <div>
      {
        posts.map((post, idx) => {
          const { title, url } = post.data

          return (
            <div key={`post-${idx}`}>
              <h1>{title}</h1>
              <Content {...post} excerpt sanitize={false} />
              <Link {...post}><a>Read more...</a></Link> 
            </div>
          )
        })
      }
    </div>
  )
})

export default Index;