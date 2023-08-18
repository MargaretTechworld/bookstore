import PropTypes from 'prop-types';

function Input({ type, style, placeholder }) {
  return (
    <input style={style} type={type} placeholder={placeholder} />
  );
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};
export default Input;
