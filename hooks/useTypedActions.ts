import ActionsCreators from '@store/actions-creators'

import { useAppDispatch } from '@hook/useAppDispatch'
import { NextThunkDispatch } from '@store/index'
import { bindActionCreators } from 'redux'

export interface TypedUseActionsHook<TState> {
    <TSelected>(selector: (actions: TState) => TSelected): TSelected
}

export const useActions = <TState = {}, TSelected extends {} = {}>(callback: (actions: TState) => TSelected) => {
    const actions = callback(ActionsCreators as unknown as TState)

    const dispatch = useAppDispatch() as NextThunkDispatch
    return bindActionCreators(actions, dispatch) as unknown as TSelected
}

export const useTypedActions: TypedUseActionsHook<typeof ActionsCreators> = useActions
