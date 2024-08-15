import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState: {
    bookmarks: [],
  },
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
      AsyncStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
    },
    removeBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(job => job.id !== action.payload.id);
      AsyncStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
    },
    loadBookmarks: (state, action) => {
      state.bookmarks = action.payload;
    }
  },
});

export const { addBookmark, removeBookmark, loadBookmarks } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
