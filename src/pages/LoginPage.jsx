import React from 'react';
import '../css/LoginPage.css';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { LoginPageSchemas } from '../schemas/LoginPageSchemas';


function LoginPage() {
    const {values,errors,handleChange,handleSubmit} = useFormik({
        initialValues: {
            userId:'',
            password:'',
        },
        validationSchema : LoginPageSchemas
      });



  return (
    
    <div className='container'>
        <form onSubmit={handleSubmit}>
      <div className='input-box'>
        <div className='blur-background'>

          <div 
          style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            }}
          className='input-Div'>
                {/* Kullancı adı kısmı */}
            <TextField
              id="userId" 
              label="Kullanıcı Adı Giriniz" variant="standard"
            color='success'
            value={values.userId}
            onChange={handleChange}
            />

          </div>

          <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            }} className='input-Div'>

                {/* Şifre Kısmı */}

<TextField  
id="password"
 label="Şifre Giriniz"
  variant="standard"
  type='password'
 color='success'
 value={values.password}
 onChange={handleChange}
            />
          </div>
          <div
          style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            }}
          className='Btn-Div'>

            {/* Buton kısmı */}

            <button type='submit' className='button'>Giriş Yap</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default LoginPage;
