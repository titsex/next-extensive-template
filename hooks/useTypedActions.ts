import ActionsCreators, { TypedUseActionsHook } from '@store/actions-creators'

import { bindActionCreators } from 'redux'
import { useAppDispatch } from './useAppDispatch'
import { NextThunkDispatch } from '../store'

export const useActions = <TState = {}, TSelected extends {} = {}>(callback: (actions: TState) => TSelected) => {
    const actions = callback(ActionsCreators as unknown as TState)

    const dispatch = useAppDispatch() as NextThunkDispatch
    return bindActionCreators(actions, dispatch) as unknown as TSelected
}

export const useTypedActions: TypedUseActionsHook<typeof ActionsCreators> = useActions
