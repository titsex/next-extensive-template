import { counterActions } from '@reducer/counterReducer'
import { postActions } from '@reducer/postReducer'

export default {
    ...counterActions,
    ...postActions,
}
