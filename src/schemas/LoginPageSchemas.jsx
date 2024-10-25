import * as yup from 'yup';
export const LoginPageSchemas = yup.object().shape({
    userId : yup.string().email("E-mail formatında giriş yapmalısınız.").required("Bu alan boş bırakılamaz."),
    password: yup.string().required("Bu alan boş bırakılamaz.")
})