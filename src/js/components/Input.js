import React, {useState} from 'react';
import PropTypes from 'prop-types';
export const Input = (props) => {
  const {ariaLabel, inputClass, label, labelClass, name, placeholder, type, value} = props;
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <label
        className={labelClass}
        htmlFor={name}
      >
        {label}
      </label>

      <input
        autoComplete="off"
        aria-label={ariaLabel}
        className={inputClass}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value || inputValue }
        onChange={event=> setInputValue(event.target.value)}
      />
    </>
  )
};

Input.propTypes = {
  ariaLabel: PropTypes.string,
  inputClass: PropTypes.string,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  name: PropTypes.string,
  placeholder : PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};
