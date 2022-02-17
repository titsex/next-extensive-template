import { configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { reducer, RootState } from '@reducer/index'
import { AnyAction, Store } from 'redux'

const makeStore: MakeStore<Store<RootState>> = () =>
    configureStore({ reducer, middleware: getDefaultMiddleware => getDefaultMiddleware() })

export const wrapper = createWrapper<Store<RootState>>(makeStore)

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type NextThunkDispatch = ThunkDispatch<AppDispatch, void, AnyAction>
