
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container';
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
function App() {
  

  return (
    <>
    <Container maxWidth="lg">
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='*' element={<ErrorPage/>} />
      </Routes>
      </Container>
    </>
  )
}

export default App
