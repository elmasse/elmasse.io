import React from 'react'
import Moment from 'react-moment'
import Head from 'next/head'
import styled from 'emotion/react'
import DisqusComments from 'react-disqus-comments';


import withPost, { Content } from 'nextein/post'

import Header from '../components/header'
import Tags from '../components/tags'
import Footer from '../components/footer'
import withAnalytics from '../components/analytics'

const Post = withPost(({ post }) => {
  const { title, description, category, tags, date, comments=false, url } = post.data
  return (
    <div>
      <Head>
        <title>{`elmasse | ${title}`}</title>
      </Head>
      <Header title={title} description={description}>
        <Meta>
          <Moment format="MMMM D, YYYY">{date}</Moment>
          <Tags tags={tags} />
        </Meta>
      </Header >

      <Body {...post} sanitize={false}/>
      <Disclaimer>
        &#8250; Any viewpoints and opinions expressed in this article are my own and do not, in any way, reflect those of my employer, my colleagues, or anyone else. I speak only for myself, not for them.
      </Disclaimer>
      {comments && 
      <Comments>
        <DisqusComments 
          shortname="elmassegithubio"
          title={title}
        />
      </Comments>
      }
      <Footer />
    </div>
  )
})

export default withAnalytics(Post)

const Meta = styled('div')`
  display: flex;
  > time {
    padding-right: 5px;
  }
`
const Body = styled(Content)`
  font-family: 'Open Sans';
  font-weight:300;
  font-size: 1.3em;
  max-width: 1000px;
  margin: 0 auto;

  > blockquote {
    border-left: 5px solid #eee;
    margin: 0;
    padding: 0 1em;
  }
`
const Disclaimer = styled('p')`
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1em;
  font-style: italic;
  font-weight: 200;
  color: #888;
  padding: 40px 0;
`
const Comments = styled('div')`
  max-width: 1000px;
  margin: 50px auto;
`