import { counterActions } from '@reducer/counterReducer'
import { postActions } from '@reducer/postReducer'
import { todoActions } from '@reducer/todoReducer'

export default {
    counter: counterActions,
    post: postActions,
    todo: todoActions,
}
