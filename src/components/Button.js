import PropTypes from 'prop-types';

function Button({ value, func, className }) {
  return (
    <button type="button" className={className} onClick={func}>
      {value}
    </button>
  );
}
Button.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
export default Button;
