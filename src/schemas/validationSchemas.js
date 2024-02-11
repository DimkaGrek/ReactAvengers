import * as yup from 'yup';

export const signUpSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Min length must be more than 2 chars')
    .max(30, 'Max length must be less than 30 chars'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,18}$/,
      'Enter a valid Password'
    )
    // Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character, and be between 6 and 18 characters long.
    .min(6, 'Min length must be more than 6 chars')
    .max(18, 'Max length must be less than 18 chars'),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid Email')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches('Enter a valid Password'),
});
