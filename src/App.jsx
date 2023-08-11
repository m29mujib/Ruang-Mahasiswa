import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/Pages/LandingPage/LandingPage'
import Layout from './components/Layout/Layout';
import Beranda from './components/Pages/Beranda/Beranda';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/beranda" element={<Beranda/>}/>
            <Route path="/nilai" element={<h1>Nilai Mahasiswa</h1>}/>
            <Route path="/surat" element={<h1>Surat</h1>}/>
            <Route path="/info" element={<h1>Info Alademik</h1>}/>
          </Route>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
