import { counterActions } from '@reducer/counterReducer'
import { postActions } from '@reducer/postReducer'

const ActionsCreators = {
    counter: counterActions,
    post: postActions,
}

export interface TypedUseActionsHook<TState> {
    <TSelected>(selector: (actions: TState) => TSelected): TSelected
}

export default ActionsCreators
