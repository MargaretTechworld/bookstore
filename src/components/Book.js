import PropTypes from 'prop-types';
import Button from './Button';

function Book({ bookTitle, author, onClick }) {
  const bookName = {
    margin: '0',
  };
  const bookAuthor = {
    marginTop: '0',
  };

  return (
    <div style={{ marginBottom: '3%' }}>
      <h2 style={bookName}>{bookTitle}</h2>
      <p style={bookAuthor}>{author}</p>
      <Button
        value="Remove"
        func={onClick} // Updated prop name to onClick
      />
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Added onClick prop type
};

export default Book;
