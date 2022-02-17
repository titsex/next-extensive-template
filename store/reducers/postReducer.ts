import { fetchPost } from '@store/actions-creators/post'
import { createSlice } from '@reduxjs/toolkit'
import { IPost, PostState } from '@type/post'

const initialState: PostState = {
    post: {} as IPost,
    isHave: false,
    error: '',
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        resetPosts: state => {
            state.post = {} as IPost
            state.isHave = false
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.post = action.payload
                state.isHave = true
                state.error = ''
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.error = (action.payload as string) || 'Неизвестная ошибка'
            })
    },
})

export const postActions = postSlice.actions
export const postReducer = postSlice.reducer
