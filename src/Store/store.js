import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { apiSlice } from '../api/apiSlice'
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

// Reducer

// A reducer is a function that receives the current state and action object, decides how to update the state if necessary
// and returns the new state (state,action) => newState
// Reducers can be considered as event listeners, it'll perform the an action depending on the type of action

// Dispatch
// The Redux store has a method called dispatch.
// The only way to update the state is to call store.dispatch() and pass in an action object.

// Store
// The current Redux application state lives in an object called the store .

// Selectors
// Selectors are functions that know how to extract specific pieces of information from a store state value.
// As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

// A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, 
// typically defined together in a single file.
//  The name comes from splitting up the root Redux state object into multiple "slices" of state.