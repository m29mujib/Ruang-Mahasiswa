import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/Pages/LandingPage/LandingPage'
import Layout from './components/Layout/Layout';
import Beranda from './components/Pages/Beranda/Beranda';
import NilaiMahasiswa from './components/Pages/NilaiMahasiswa/NilaiMahasiswa';
import Surat from './components/Pages/Surat/Surat';
import InfoAkademik from './components/Pages/InfoAkademik/InfoAkademik';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/beranda" element={<Beranda/>}/>
            <Route path="/nilai" element={<NilaiMahasiswa/>}/>
            <Route path="/surat" element={<Surat/>}/>
            <Route path="/info" element={<InfoAkademik/>}/>
          </Route>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
