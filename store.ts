import { configureStore } from '@reduxjs/toolkit'
import { churchServiceReducers } from './features/churchService'
import { memberReducers } from './features/member'

export const store = configureStore({
  reducer: {
    member: memberReducers,
    churchService: churchServiceReducers,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
