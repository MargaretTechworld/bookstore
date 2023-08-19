import Book from './Book';
import NewBookForm from './NewBookForm';
import bookData from '../bookData';

const bookContainer = {
  padding: '2%',
  margin: 'auto',
  width: '90%',

};
function booklist(book) {
  return (
    <Book
      key={book.bookId}
      bookTitle={book.bookTitle}
      author={book.author}
    />
  );
}

function Books() {
  return (
    <div style={bookContainer}>
      {bookData.map(booklist)}
      <h2>ADD NEW BOOK</h2>
      <NewBookForm />
    </div>
  );
}
export default Books;
