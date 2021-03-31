import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    value: 0,
    genreSelected:null,
    loading: false,
    movies: []
  },
  reducers: {
    chooseGenre:(state, action)=>{
       state.genreSelected=  action.payload
    },
    setLoading: state=>{
      state.loading= !state.loading;
    },
    setMovies:(state, action)=>{

      console.log("movies a cargar", action.payload);
      state.loading=false;
      state.movies= action.payload;
    }
  },
});

export const {chooseGenre, setLoading, setMovies} = mainSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
 //   dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectGenre = state => {
  return state.main.genreSelected
}

export const selectLoading=state=>state.main.loading;
export const selectMovies= state=>state.main.movies;

export default mainSlice.reducer;
