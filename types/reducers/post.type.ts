export interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

export interface PostState {
    post: IPost
    isHave: boolean
    isPending: boolean
    error: string
}

export enum PostActionTypes {
    FETCH_POSTS = 'posts/fetchPosts',
    RESET_POSTS = 'posts/resetPosts',
}

interface PostFetchPostsAction {
    type: PostActionTypes.FETCH_POSTS
    payload: IPost
}

interface PostResetPostsAction {
    type: PostActionTypes.RESET_POSTS
}

export type PostAction = PostFetchPostsAction | PostResetPostsAction
