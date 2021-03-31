import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../reducers/main';

export default configureStore({
  reducer: {
    main: mainReducer,
  },
});
