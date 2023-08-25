import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/BooksSlice';
import NewBookForm from './NewBookForm';
import Book from './Book';

const bookContainer = {
  padding: '2%',
  margin: 'auto',
  width: '90%',
};

function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleAddBook = (book) => {
    const newBook = { ...book, item_id: uuidv4() };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div style={bookContainer}>
      {books.map((book) => (
        <div key={book.item_id}>
          <Book
            bookTitle={book.title}
            author={book.author}
            bookId={book.item_id}
            onClick={() => handleRemoveBook(book.item_id)}
          />
        </div>
      ))}
      <NewBookForm onClick={(book) => handleAddBook(book)} />
    </div>
  );
}
export default Books;
