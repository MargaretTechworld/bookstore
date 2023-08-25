import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/BooksSlice';
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
  const [values, setValues] = useState({ title: '', author: '' });
  const dispatch = useDispatch();
  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }
  function handleSubmit() {
    const newBook = {
      item_id: uuidv4(),
      ...values,
    };
    dispatch(addBook(newBook));
    setValues({ title: '', author: '' });
  }
  return (
    <form style={formStyle}>
      <input
        style={bookInput}
        name="title"
        type="text"
        placeholder="title"
        value={values.title}
        onChange={handleChange}
      />
      <input
        style={bookAuthor}
        type="text"
        name="author"
        placeholder="BookAuthor"
        value={values.author}
        onChange={handleChange}
      />
      <Button
        value="Add"
        func={() => handleSubmit()}
      />
    </form>
  );
}
export default NewBookForm;
