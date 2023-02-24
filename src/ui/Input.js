import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type,
  name,
  id,
  onChange,
  label,
  value,
  classname,
  labelClassName,
  labelStyle,
  style,
  placeholder,
  disabled,
  checked,
  errorMessage,
  styleInline,
  ...rest
}) {
  return (
    <>
      <label className={labelClassName} style={labelStyle}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        className={classname}
        style={style}
        placeholder={placeholder}
        disabled={disabled}
        checked={checked}
        {...rest}
      />
      {errorMessage && (
        <div style={styleInline} className="form-field-error" role="alert">
          {errorMessage}
        </div>
      )}
    </>
  );
}

Input.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  classname: PropTypes.object,
  style: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  type: 'text',
  name: '',
  id: '',
  value: undefined || '',
  disabled: false,
  classname: {},
  style: {},
  onChange: () => {},
  placeholder: '',
  rest: {},
};

export default Input;
