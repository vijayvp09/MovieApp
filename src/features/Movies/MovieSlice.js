import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/Api/movieApi'
// import { APIKey } from '../../common/Api/MovieApiKey'
const APIKey = process.env.APIKey;

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', 
    async (term) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie` );
        return response.data;
    }
);

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', 
  async (term) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
    return response.data;
  }
);

export const fetchAsyncMovieOrShow = createAsyncThunk('movies/fetchAsyncMovieOrShow', 
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data;
  }
);

const initialState = {
    movies: {},
    error: null,
    loading: false,
    shows: {},
    movieOrShow: {},
    
}

const movieSlice = createSlice({
    name: 'movies',
    initialState, 
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
        removeShowOrMovie: (state, action) => {
          state.movieOrShow = {};
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchAsyncMovies.pending, (state)=>{
            console.log('Pending');
            state.loading = true;
          })
          .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
            console.log('successfull');
            state.movies = action.payload;
            state.loading = false;
          })
          .addCase(fetchAsyncMovies.rejected, (state, action) => {
            console.log('Rejected');
            state.error = action.error.message;
          })
          .addCase(fetchAsyncShows.pending, (state) =>{
            console.log('Pending');
            state.error = null;
            state.loading = true;
          })
          .addCase(fetchAsyncShows.fulfilled, (state, action) => {
            console.log('Successful');
            state.shows = action.payload;
            state.loading = false;
          })
          .addCase(fetchAsyncShows.rejected, (state, action) => {
            console.log('Rejected');
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(fetchAsyncMovieOrShow.pending, (state) => {
            console.log('Pending');
            state.loading= true;
            state.error=false;
          })
          .addCase(fetchAsyncMovieOrShow.fulfilled, (state, action) => {
            console.log('success');
            state.movieOrShow = action.payload;
            state.loading= false;
            state.error = false;
          })
          .addCase(fetchAsyncMovieOrShow.rejected, (state, action) => {
            console.log('rejected');
            state.error = action.error.message;
            state.loading = false;
          });
    }
});


export const  { addMovies, removeShowOrMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedShowOrMovie = (state) => state.movies.movieOrShow;
export default movieSlice.reducer;