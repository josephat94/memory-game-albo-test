import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    value: 0,
    genreSelected: null,
    loading: false,
    movies: [],
    card1Selected: null,
    card2Selected: null,
    allFound: false,
  },
  reducers: {
    chooseGenre: (state, action) => {
      state.genreSelected = action.payload;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setMovies: (state, action) => {
      let originalMovies = action.payload.slice(0, 15);

      originalMovies = originalMovies.concat(originalMovies);
      originalMovies = shuffleArray(originalMovies);
      state.loading = false;

      state.movies = originalMovies.map((movie) => ({
        id: movie.id,
        poster: movie.poster_path,
        title: movie.title,
        isFlipped: false,
        found: false,
      }));
    },
    reset:(state)=>{
      state.genreSelected= null;
      state.loading= false;
      state.movies= [];
      state.card1Selected= null;
      state.card2Selected= null;
      state.allFound= false;
    },

    flipCard: (state, action) => {
      //Aqui se va a voltear una card por su id

      if (state.card1Selected == null && state.card2Selected == null) {
        state.card1Selected = action.payload;
      } else {
        if (state.card1Selected != null && state.card2Selected == null) {
          if (action.payload != state.card1Selected) {
            state.card2Selected = action.payload;
          }
        } else {
          if (state.card1Selected != null && state.card1Selected != null) {
            if (action.payload != state.card1Selected) {
              state.card1Selected = action.payload;
              state.card2Selected = null;
            }
          }
        }
      }

      let movies = state.movies.map((movie, index) => {
        if (index == state.card1Selected || index == state.card2Selected) {
          movie.isFlipped = true;
        } else {
          if (movie.found == false) {
            movie.isFlipped = false;
          }
        }
        return movie;
      });

      console.log(state.card1Selected, state.card2Selected);
      if (state.card1Selected != null && state.card2Selected != null) {
        console.log(
          "Si se seleccionaron 2 cards",
          state.card1Selected,
          state.card2Selected
        );
        if (movies[state.card1Selected].id == movies[state.card2Selected].id) {
          movies[state.card1Selected].found = true;
          movies[state.card2Selected].found = true;
        }
      }

      //* Se busca si ya no falta ninguna card pareja por aparecer en el tablero
      let allCorrect = searchAllFound(movies);
      console.log(allCorrect);
      let res=false;
      if (allCorrect == true) {
        res=true; 
      }

      state.movies = movies;
      state.allFound=res;
    },

  },
});

const searchAllFound = (movies) => {
  if (movies.find((movie) => movie.found == false) == undefined) {
    return true;
  } else {
    return false;
  }
};
const shuffleArray = (movies) => {
  let newMovies = movies.sort(() => Math.random() - 0.5);

  return newMovies;
};
export const {
  chooseGenre,
  setLoading,
  setMovies,
  flipCard,
  reset
} = mainSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    //   dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectGenre = (state) => {
  return state.main.genreSelected;
};
export const selectAllFound = (state) => state.main.allFound;
export const selectLoading = (state) => state.main.loading;
export const selectMovies = (state) => state.main.movies;
export const selectCard1 = (state) => state.main.card1Selected;
export const selectCard2 = (state) => state.main.card2Selected;
export default mainSlice.reducer;
