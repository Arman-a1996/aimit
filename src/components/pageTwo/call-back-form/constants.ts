import * as yup from 'yup';

export const defaultValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export const phoneRegExp = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10}(\s*)?/;

export const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const validation = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid Email').required('Email is required').matches(emailPattern, 'Invalid Email'),
  phone: yup.string().required('Phone is required').matches(phoneRegExp, ' Invalid Phone').max(12, 'Max 12 digits'),
  message: yup.string(),
});
