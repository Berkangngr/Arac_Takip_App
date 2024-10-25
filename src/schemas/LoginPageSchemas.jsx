import * as yup from 'yup';
export const LoginPageSchemas = yup.object().shape({
    userId : yup.string().required("Bu alan zorunludur."),
    password: yup.string().required("Bu alan boş bırakılamaz.")
})