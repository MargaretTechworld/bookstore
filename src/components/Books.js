import Button from './Button';
import Input from './Input';
import List from './List';

const bookContainer = {
  padding: '2%',
  margin: 'auto',
  width: '90%',

};
const formStyle = {
  display: 'flex',
  gap: '10px',
};
const bookInput = {
  width: '30%',
  padding: '0.5%',
};

const bookAuthor = {
  width: '10%',
  padding: '0.5%',

};

function Books() {
  return (
    <div style={bookContainer}>
      <List />
      <h2>ADD NEW BOOK</h2>
      <form style={formStyle}>
        <Input
          style={bookInput}
          type="text"
          placeholder="BookTitle"
        />
        <Input
          style={bookAuthor}
          type="text"
          placeholder="BookAuthor"
        />
        <Button
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
}
export default Books;
