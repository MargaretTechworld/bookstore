import Button from './Button';

function List() {
  const bookName = {
    margin: '0',
  };
  const bookAuthor = {
    marginTop: '0',
  };

  return (
    <div>
      <h2 style={bookName}>Book Name</h2>
      <p style={bookAuthor}>Author</p>
      <Button
        type="button"
        value="Delete"
      />
    </div>
  );
}
export default List;
