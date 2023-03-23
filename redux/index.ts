import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import themeSlice from './slices/themeSlice'
import iPostSlice from './slices/IPostSlice'


export const store = configureStore({
  reducer: {
    themeSlice: themeSlice,
    iPostSlice: iPostSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store