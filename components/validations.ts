import * as yup from 'yup';
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("'email' is not in the correct format!!!")
    .required("'email' is required!!!"),
  password: yup
    .string()
    .required("'password' is required field!!!")
    .min(6, "'password' must be at least 6 characters"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'passwords do not match!')
    .required(),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("'email' is not in the correct format!!!")
    .required("'email' is required!!!"),
  password: yup
    .string()
    .required("'password' is required field!!!")
    .min(6, "'password' must be at least 6 characters!!!"),
});
