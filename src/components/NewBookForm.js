// import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/Api';
import Button from './Button';

function NewBookForm() {
  const [values, setValues] = useState({
    title: '',
    author: '',
  });
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
      title: values.title,
      author: values.author,
    };
    dispatch(addBook(newBook));
    setValues({ title: '', author: '' });
  }
  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <div className="form-input">
        <input
          className="title-input"
          name="title"
          type="text"
          placeholder="Book Title"
          value={values.title}
          onChange={handleChange}
        />
        <input
          className="author-input"
          type="text"
          name="author"
          placeholder="Book Author"
          value={values.author}
          onChange={handleChange}
        />
        <Button
          className="input-button"
          value="Add"
          func={() => handleSubmit()}
        />
      </div>
    </form>
  );
}
export default NewBookForm;
