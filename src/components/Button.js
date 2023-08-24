import PropTypes from 'prop-types';

function Button({ value }) {
  const buttonStyle = {
    color: 'white',
    backgroundColor: '#0290FF',
    padding: '0.4%',
    width: '10%',
    textAlign: 'center',
    borderRadius: '3px',
  };
  return (
    <button style={buttonStyle} type="button">
      {value}
    </button>
  );
}
Button.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Button;
