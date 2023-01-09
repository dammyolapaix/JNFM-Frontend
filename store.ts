import { configureStore } from '@reduxjs/toolkit'
import { attendanceReducers } from './features/attendance'
import { cellReducers } from './features/cell'
import { churchServiceReducers } from './features/churchService'
import { departmentReducers } from './features/department'
import { expenditureReducers } from './features/expenditure'
import { memberReducers } from './features/member'

export const store = configureStore({
  reducer: {
    attendance: attendanceReducers,
    cell: cellReducers,
    department: departmentReducers,
    expenditure: expenditureReducers,
    member: memberReducers,
    churchService: churchServiceReducers,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
