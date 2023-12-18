import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home';
import NavBar from './components/NavBar';
import Login from './views/Login';

function App() {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
