import { createSlice } from '@reduxjs/toolkit';
import { addBook, removeBook, getBook } from '../Api';

const initialState = {
  books: [],
  isLoading: false,
  isError: '',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload !== '') {
          const books = [];
          const keys = Object.keys(action.payload);
          keys.forEach((x) => {
            books.push({ item_id: x, ...action.payload[x][0] });
          });
          state.books = books;
          if (state.books.length === 0) state.isError = 'No result was found!';
        }
      })
      .addCase(getBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isError = action.error.message;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        if (action.payload !== null) {
          state.isError = '';
          state.books = state.books.filter(
            (book) => book.item_id !== action.payload.item_id,
          );
          if (state.books.length === 0) state.isError = 'No result was found!';
        } else {
          state.isError = 'Unable to remove record!';
        }
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isError = action.error.message;
      });
  },
});
export default booksSlice.reducer;
