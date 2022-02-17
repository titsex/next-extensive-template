import { AppDispatch, NextThunkDispatch } from '@store/index'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>() as NextThunkDispatch
