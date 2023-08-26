import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addBook, getBook, removeBook } from '../redux/Api';
import NewBookForm from './NewBookForm';
import Book from './Book';

function BookList() {
  const dispatch = useDispatch();
  const { isLoading, isError, books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  const loading = isLoading && <p>Books loading, please wait!</p>;
  const error = isError && <p>Error loading books, please try again!</p>;

  return (
    <div>
      {loading}
      {error}
      {books && books.map((book) => (
        <div key={book.item_id}>
          <Book
            bookTitle={book.title}
            author={book.author}
            bookId={book.item_id}
            onClick={() => dispatch(removeBook(book.item_id))}
          />
        </div>
      ))}
      <NewBookForm onClick={(book) => dispatch(addBook(book))} />
    </div>
  );
}
export default BookList;
