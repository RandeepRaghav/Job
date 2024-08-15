import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobsSlice';
import bookmarksReducer from './bookmarksSlice';

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    bookmarks: bookmarksReducer,
  },
});

export default store;
