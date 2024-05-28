import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)
console.log(5==5);
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/services' element={<h1>Service</h1>}/>
        <Route path='/contact' element={<h1>Contact</h1>}/>
        <Route path='*' element={<h1>NOT fount</h1>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
