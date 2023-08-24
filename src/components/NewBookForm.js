import Button from './Button';

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
function NewBookForm() {
  return (
    <form style={formStyle}>
      <input
        style={bookInput}
        type="text"
        placeholder="BookTitle"
      />
      <input
        style={bookAuthor}
        type="text"
        placeholder="BookAuthor"
      />
      <Button
        value="Add"
      />
    </form>
  );
}
export default NewBookForm;
