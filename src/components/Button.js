import PropTypes from 'prop-types';

function Button({ value, func }) {
  const buttonStyle = {
    color: 'white',
    backgroundColor: '#0290FF',
    padding: '0.4%',
    width: '10%',
    textAlign: 'center',
    borderRadius: '3px',
  };
  return (
    <button style={buttonStyle} type="button" onClick={func}>
      {value}
    </button>
  );
}
Button.propTypes = {
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};
export default Button;
