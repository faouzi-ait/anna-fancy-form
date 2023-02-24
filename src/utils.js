export const inputStyle = 'border-2 outline-none p-2 rounded-md width';

export const emailFormPattern = {
  required: 'Your email is required',
  pattern: {
    value:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Please check the format of your email',
  },
};

export const setErrorStyle = (name) => {
  return {
    borderColor: name ? 'red' : '',
    boxShadow: name ? '0 0 1.5px 1px red' : '',
  };
};

export const defaultValues = {
  name: '',
  surname: '',
  phone: '',
  email: '',
  password: '',
};
