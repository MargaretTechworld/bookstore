import PropTypes from 'prop-types';

function Button({ type, value }) {
  const buttonStyle = {
    color: 'white',
    backgroundColor: '#0290FF',
    padding: '0.4%',
    width: '10%',
    textAlign: 'center',
    borderRadius: '3px',
  };
  return (
    <buttion style={buttonStyle} type={type}>
      {value}
    </buttion>
  );
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default Button;
