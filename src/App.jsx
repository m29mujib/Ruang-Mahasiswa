import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/Pages/LandingPage/LandingPage'
import Layout from './components/Layout/Layout';
import Beranda from './components/Pages/Beranda/Beranda';
import Surat from './components/Pages/Surat/Surat';
import InfoAkademik from './components/Pages/InfoAkademik/InfoAkademik';
import KhsMahasiswa from './components/Pages/NilaiMahasiswa/KhsMahasiswa/KhsMahasiswa';
import NilaiUjian from './components/Pages/NilaiMahasiswa/NilaiUjianMahasiswa/NilaiUjian';


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/beranda" element={<Beranda/>}/>
            <Route path="/khs" element={<KhsMahasiswa/>}/>
            <Route path="/ujian" element={<NilaiUjian/>}/>
            <Route path="/surat" element={<Surat/>}/>
            <Route path="/info" element={<InfoAkademik/>}/>
          </Route>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
