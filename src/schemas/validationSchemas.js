import * as yup from 'yup';

export const signUpSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Min length must be more than 2 chars')
    .max(32, 'Max length must be less than 32 chars'),
  email: yup
    .string()
    .email('Enter a valid Email')
    .required('Email is required')
    .max(64, 'Max length must be less than 64 chars'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Min length must be more than 8 chars')
    .max(64, 'Max length must be less than 64 chars'),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid Email')
    .required('Email is required')
    .max(64, 'Max length must be less than 64 chars'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Min length must be more than 8 chars')
    .max(64, 'Max length must be less than 64 chars'),
});

export const transactionSchema = yup.object({
  date: yup.string().required('Date is required'),
  time: yup.string().required('Time is required'),
  category: yup.string().required('Category is required'),
  sum: yup
    .number('Sum is required')
    .positive('Sum must be positive')
    .integer('Sum must be an integer')
    .min(1, 'Sum cannot be less than 1')
    .required('Sum is required'),
  comment: yup
    .string()
    .required('Comment is required')
    .min(3, 'Comment length must be at least 3 characters long'),
});
