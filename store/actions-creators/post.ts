import { createAsyncThunk } from '@reduxjs/toolkit'
import { PostActionTypes } from '@type/post'
import axios from 'axios'

export const fetchPosts = createAsyncThunk(PostActionTypes.FETCH_POSTS, async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=1`)
    return response.data[0]
})
