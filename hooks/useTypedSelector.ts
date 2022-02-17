import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '@reducer/index'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
