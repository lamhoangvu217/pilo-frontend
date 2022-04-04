
import userSlice from './reducers/auth/userSlice'
const { configureStore } = require('@reduxjs/toolkit')

const rootReducer = {
  user: userSlice
}

const store = configureStore({
  reducer: rootReducer,
})

export default store;