import { fetchPosts } from '@store/actions-creators/post'
import { createSlice } from '@reduxjs/toolkit'
import { IPost, PostState } from '@type/post'

const initialState: PostState = {
    post: {} as IPost,
    error: '',
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        resetPosts: state => {
            state.post = {} as IPost
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.post = action.payload
                state.error = ''
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                if (!action.payload) state.error = 'Неизвестная ошибка'
            })
    },
})

export const postActions = postSlice.actions
export const postReducer = postSlice.reducer
