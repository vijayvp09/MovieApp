import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './Movies/MovieSlice'

const store = configureStore({
    reducer: {
        movies: moviesReducer}
});

export default store;