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
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,64}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be between 6 and 18 characters long.'
    )
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
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,64}$/,
      'Enter a valid Password'
    ),
});
