import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import themeSlice from './slices/themeSlice'
import iPostSlice from './slices/postSlice'
import userSlice from './slices/userSlice'
import globalSlice from './slices/globalSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    post: iPostSlice,
    user: userSlice,
    global: globalSlice,
  },
})


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store