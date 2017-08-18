import React from 'react'
import Moment from 'react-moment'

import withPosts, { sortByDate } from 'nextein/posts'
import { Content } from 'nextein/post'
import Link from 'nextein/link'

import Tags from '../components/tags'

const Index = withPosts(({ posts }) => {
  posts.sort(sortByDate)

  return (
    <div>
      {
        posts.map((post, idx) => {
          const { title, url, date, tags } = post.data

          return (
            <div key={`post-${idx}`}>
              <h1>{title}</h1>
              <div>
                <Moment format="MMMM D, YYYY">{date}</Moment>
                <Tags tags={tags} />
               </div> 
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