import React from 'react'
import Post from '../../components/Post/Post'

export default ({ posts }) => (
    <div className="posts">
        {posts.map((post, i) => (
            <Post key={i} post={post} />
        ))}
    </div>
)