/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import '../css/LoginPage.css';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { LoginPageSchemas } from '../schemas/LoginPageSchemas';
import axios from 'axios';
import { Email } from '@mui/icons-material';

let BASE_URL = "http://localhost:56952/Account/Login"; 

function LoginPage() {

  const postNewUser = async (newUser) => {
    const data = {
      Email:newUser.userId,
      Password:newUser.password,
      ReturnUrl: null,
    };

    try {
        const response = await axios.post(BASE_URL, data);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('API isteği sırasında bir hata oluştu:', error);
    }
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
        userId: '',
        password: '',
    },
    validationSchema: LoginPageSchemas,
    onSubmit: postNewUser, // Form gönderildiğinde bu fonksiyonu çağır
  });

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='input-box'>
          <div className='blur-background'>
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className='input-Div'>
              {/* Kullancı adı kısmı */}
              <TextField
                id="userId" 
                name='userId'
                label="Kullanıcı Adı Giriniz" 
                type='email'
                variant="standard"
                color='success'
                value={values.userId}
                onChange={handleChange}
              />
              {errors.userId && <p className='input-error'>{errors.userId}</p>}
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }} className='input-Div'>

              {/* Şifre Kısmı */}
              <TextField  
                id="password"
                name='password'
                label="Şifre Giriniz"
                variant="standard"
                type='password'
                color='success'
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p className='input-error'>{errors.password}</p>}
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className='Btn-Div'>
              {/* Buton kısmı */}
              <button type='submit' className='button'>Giriş Yap</button> {/* Buton tipi değişti */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
