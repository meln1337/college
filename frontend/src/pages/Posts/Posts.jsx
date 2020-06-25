import React from 'react'
import Post from '../../components/Post/Post'

export default ({ posts, from }) => (
    <div className="posts">
        {posts.map((post, i) => (
            <Post key={i} post={post} from={from} />
        ))}
    </div>
)