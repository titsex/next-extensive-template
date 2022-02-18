import { PostActionTypes } from '@type/reducers/post.type'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPost = createAsyncThunk(PostActionTypes.FETCH_POSTS, async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    return response.data
})
