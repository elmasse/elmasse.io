
import withPost, { Content } from 'nextein/post'

const Post = withPost(({ post }) => {
    const { title } = post.data
    return (
        <div>
            <h1>{title}</h1>
            <Content {...post}/>
        </div>
    )
})

export default Post