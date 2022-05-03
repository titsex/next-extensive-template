import { IPost, PostState } from '@type/reducers/post.type'
import { fetchPost } from '@store/actions-creators/post'
import { createSlice } from '@reduxjs/toolkit'

const initialState: PostState = {
    post: {} as IPost,
    isHave: false,
    isPending: false,
    error: '',
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        reset: state => {
            state.post = {} as IPost
            state.isHave = false
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPost.pending, state => {
                state.isPending = true
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.post = action.payload
                state.isHave = true
                state.isPending = false
                state.error = ''
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.error = (action.payload as string) || 'Неизвестная ошибка'
                state.isPending = false
            })
    },
})

export const postActions = postSlice.actions
export const postReducer = postSlice.reducer
