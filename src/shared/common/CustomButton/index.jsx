import PropTypes from 'prop-types';
const CustomButton = ({ title, type, disabled, size,handleClick }) => {
  return (
    <button onClick={handleClick}
      type={type}
      disabled={disabled}
      className={
        disabled
          ? `opacity-[0.7]  bg-main px-10 w-full text-white  
          font-medium text-base leading-5 h-12 transition-all duration-300 ease`
          : `bg-main px-10 w-full text-white font-medium text-base leading-5 h-12 transition-all duration-300 ease`
      }
    >
      {title}
    </button>
  );
};

export default CustomButton;
CustomButton.propTypes={
  title:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  size:PropTypes.string.isRequired,
  handleclick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,

}