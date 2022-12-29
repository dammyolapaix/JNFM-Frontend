import { configureStore } from '@reduxjs/toolkit'
import { attendanceReducers } from './features/attendance'
import { churchServiceReducers } from './features/churchService'
import { departmentReducers } from './features/department'
import { memberReducers } from './features/member'

export const store = configureStore({
  reducer: {
    attendance: attendanceReducers,
    department: departmentReducers,
    member: memberReducers,
    churchService: churchServiceReducers,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
