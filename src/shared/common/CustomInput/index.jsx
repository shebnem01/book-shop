import PropTypes from 'prop-types';
import useToggle from "../../../hooks/useToggle";
import { BsEye } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";
const CustomInput = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  touch,
}) => {
  const [state, toggle] = useToggle();
  const showEyeIcons = type === "password";
  return (
    <div className="mb-6 relative">
      <label className="text-base font-normal leading-5 mb-3 block">
        {placeholder}
      </label>
      <input
        className={`p-3 w-full bg-[#FCFCFD] border border-[#E6E6E6] text-gray-400 rounded-md
       ${error && `border-red-500`}`}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        id={name}
        type={state ? `text` : { type }}
        placeholder={placeholder}
      />
      {error && touch && <div className="text-red-500 text-sm">{error}</div>}
      {showEyeIcons && (
        <div className="absolute cursor-pointer top-[60%] right-4">
          {state ? (
            <RiEyeCloseLine onClick={toggle} />
          ) : (
            <BsEye onClick={toggle} />
          )}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
CustomInput.propTypes={
  type:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
  touch: PropTypes.bool,


}
