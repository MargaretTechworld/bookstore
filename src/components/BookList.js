import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewBookForm from './NewBookForm';
import { getBook, removeBook } from '../redux/books/BooksSlice';
import Book from './Book';

function BookList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  const { isLoading, isError, books } = useSelector((state) => state.books);
  const loading = isLoading && <p>Books loading, please wait!</p>;
  const error = isError && <p>Error loading books, please try again!</p>;

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  const bookList = books.map((book) => (
    <div key={book.item_id}>
      <Book
        bookTitle={book.title}
        author={book.author}
        bookId={book.item_id}
        onClick={() => handleRemoveBook(book.item_id)}
      />
    </div>
  ));

  return (
    <div>
      {loading}
      {error}
      {bookList}
      <NewBookForm />
    </div>
  );
}

export default BookList;
