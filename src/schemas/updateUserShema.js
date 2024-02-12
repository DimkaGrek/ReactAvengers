import * as yup from 'yup';

export const updateUserShema = yup.object({
  currency: yup.string(),
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Min length must be more than 2 chars')
    .max(30, 'Max length must be less than 30 chars'),
});
