import Post from '@component/Post'
import { NextPage } from 'next'
import React from 'react'

const PostPage: NextPage = () => {
    return (
        <div className="position-absolute start-50 top-50 translate-middle h-75">
            <Post />

            <div className="pt-4" />
        </div>
    )
}

export default PostPage
