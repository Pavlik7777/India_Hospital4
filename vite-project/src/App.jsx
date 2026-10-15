import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Page1 from './Home/home'
import Header from './Header/header'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' index element ={<Page1/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
