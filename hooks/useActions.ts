import ActionsCreators from '@store/actions-creators'

import { bindActionCreators } from 'redux'
import { useAppDispatch } from './useAppDispatch'
import { NextThunkDispatch } from '../store'

export const useActions = () => {
    const dispatch = useAppDispatch() as NextThunkDispatch
    return bindActionCreators(ActionsCreators, dispatch)
}
