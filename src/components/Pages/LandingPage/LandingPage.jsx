import Logo from '../../../assets/logo.png'
import Group from '../../../assets/Group1474.png'
import WrapTwo from '../../../assets/wraptwo.png'
import Book from '../../../assets/book.png'
import Jam from '../../../assets/jam.png'
import Meja from '../../../assets/meja.png'
import Tas from '../../../assets/tas.png'
import Ceklis from '../../../assets/ceklis.png'
import styles from './LandingPage.module.css'
import I from '../../../assets/instagram.png'
import L from '../../../assets/linkedin.png'
import Y from '../../../assets/youtube.png'
import P from '../../../assets/playstore.png'

// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
const LandingPage = () => {
   
   // const navigate = useNavigate()

   // const [nim, setNim] = useState("")
   // const [password, setPassword] = useState("")


   const handleSubmit = (e) => {
      e.preventDefault()

      localStorage.setItem("Nim", e.target.nim.value)
      localStorage.setItem("Password", e.target.password.value)
      window.location.href="/beranda" ; 
     
   }
   
   return(
      <>
      <div className={`${styles.wrap}`}>
         <header className='flex items-center justify-between w-full'>
            <div className={styles.leftHead}>
              <img src={Logo} className='w-60'/>
            </div>
            <div className={styles.rightHead}>
               <nav className=''>
                  <a href="#" className='mr-32 text-lg text-sky-600 font-bold'>Pengumuman</a>
                  <a href="#" className='mr-32 text-lg text-sky-600 font-bold'>Platform</a>
                  <a href="#" className='mr-32 text-lg text-sky-600 font-bold'>Tentang Kami</a>
               </nav>
            </div>
         </header>

         <div className={styles.main}>
            <div className={styles.mainLeft}>
               <div className={styles.mainText}>
                  <h2 className='mb-3 text-3xl text-green-600 font-bold'>Dapatkan segala informasi akademik mulai dari perkuliahan, ujian hingga wisuda</h2>
                  <p className='text-sm font-semibold'>Dengan siakad student BSI ini anda bisa mencari seluruh informasi seputar perkuliahan hingga informasi lainnya yang berhubungan dengan wisuda.</p>
               </div>
               <div className={styles.mainForm}>
                  <form className='w-full' onSubmit={handleSubmit}>
                     <div className='flex'>
                        <input type="text" name='nim' placeholder='Masukan nim anda..' className={`mr-3 w-full ${styles.input}`} />
                        <input type="password" name='password' placeholder='Masukan password anda..' className={`w-full ${styles.input}`} />
                     </div>
                     <select id="cars" name="carlist" form="carform" className={`w-full mt-3 ${styles.input}`}>
                        <option value="D-III">D-III</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                     </select>
                     <button type="submit" className="flex justify-center items-center w-full py-3 bg-cyan-500 text-white mt-5">Login</button>
                  </form>
               </div>
            </div>
            <div className={styles.mainRight}>
               <img src={Group} className='w-3/5'/>
            </div>
         </div> 
          <div className={`m-auto mt-3 ${styles.info}`}>
            <h1 className='text-xl mb-3 font-bold text-green-700'>Pengumuman Nilai Murni UAS dan KHS Semester Ganjil 2022/2023 </h1>
            <p className='text-xs font-semibold text-slate-900'>Nilai Murni UAS dan Kartu Hasil Studi (KHS) dapat dilihat pada tanggal 18 Januari 2023, pukul 17.00 WIB</p>
         </div>
         <div className={styles.circle1}></div>
         <div className={styles.circle2}></div>
      </div>

{/* WRAPP TWO */}
      <div className={`${styles.wrapTwo}`}>
        <div className={styles.wrapTwoLeft}>
          <img src={WrapTwo} className={styles.image}/>
        </div>
        <div className={`pt-3 pb-3 pl-14 pr-14 ${styles.wrapTwoRight}`}>
            <h1 className='text-2xl text-slate-100 font-bold mb-6 w-3/4'>Kamu juga bisa mengecek NIM baru kamu ataupun mengecek surat keluar / surat DO</h1>
            <form className='flex w-full'>
               <input type="text" placeholder='masukan nim anda..' className={`w-full mr-6 ${styles.input}`}/>
                <select id="cars" name="carlist" form="carform" className={`w-80 ${styles.input}`}>
                  <option value="D-III">Cek Nim Baru</option>
                  <option value="S1">S1</option>
                  <option value="S2">S2</option>
               </select>
            </form>
               <button className={`w-1/4 mt-6 ${styles.btn}`}>Proses</button>
        </div>
      </div>

   {/* WRAPP THREE */}
      <div className={styles.wrapThree}>
         <div className='flex justify-center margin-auto'>
            <h1 className='text-2xl text-green-600 font-bold w-1/3 text-center'>Apa Saja fitur yang dimiliki oleh SIAKAD Student ini</h1>
         </div>
         <div className='flex flex-wrap justify-center mt-14'>
            <div className={styles.card}>
               <img src={Book} className='w-28 h-28'/>
               <h2 className='text-lg text-blue-600 font-bold mb-3'>Update Informasi Akademik</h2>
               <p>Informasi yang bisa diakses oleh para mahasiswa mulai dari kegiatan perkuliahan ataupun kegiatan akademik yang lainnya yang mampu menunjang keterampilan mahasiswa</p>
            </div>
            <div className={styles.card}>
               <img src={Jam} className='w-28 h-28'/>
               <h2 className='text-lg text-blue-600 font-bold mb-3'>Pembayaran Biaya Kuliah</h2>
               <p>Platform yang membantu para mahasiswa dalam melakukan pembayaran biaya kuliah dan juga pembayaran kegiatan akademik lainnya.</p>
            </div>
            <div className={styles.card}>
               <img src={Tas} className='w-28 h-28'/>
               <h2 className='text-lg text-blue-600 font-bold mb-3'>Pendaftaran Ujian HER</h2>
               <p>Pada platform ini juga para mahasiswa juga bisa melakukan pendaftaran ujian HER dan sekaligus melihat jadwal ujian HER yang telah ditentukan oleh sistem.</p>
            </div>
            <div className={styles.card}>
               <img src={Ceklis} className='w-28 h-28'/>
               <h2 className='text-lg text-blue-600 font-bold mb-3'>Update Informasi Akademik</h2>
               <p>Informasi yang bisa diakses oleh para mahasiswa mulai dari kegiatan perkuliahan ataupun kegiatan akademik yang lainnya yang mampu menunjang keterampilan mahasiswa</p>
            </div>
            <div className={styles.card}>
               <img src={Book} className='w-28 h-28'/>
               <h2 className='text-lg text-blue-600 font-bold mb-3'>Informasi Seputar TA</h2>
               <p>Di platform ini juga para mahasiswa juga bisa melihat informasi mengenai seputar TA/Skripsi mulai dari jadwal, pedoman, serta jadwal untuk melakukan sidang tugas akhir/skripsi yang akan dilakukan.</p>
            </div>
            <div className={styles.card}>
               <img src={Meja} className='w-28 h-28'/>
               <h2 className='text-lg text-blue-600 font-bold mb-3 mt-2'>Pengajuan surat PKL/Riset</h2>
               <p>Dalam web SIAKAD Student ini para mahasiswa juga bisa melakukan pengajuan sekaligus membuat surat PKL atau riset untuk keperluan penunjang kegiatan riset ataupun PKL yang nantinya akan dilaksanakan oleh para mahasiswa.</p>
            </div>
         </div>
         <div className={styles.circle3}></div>
         <div className={styles.circle4}></div>
         <div className={styles.circle5}></div>
      </div>

      {/* WRAPP FOR */}
      <div className={styles.wrapFour}>
         <div className={styles.bayangan}></div>
         <div className={styles.iklan}>
            <h1 className='text-4xl w-2/3 text-slate-100 font-bold text-center mb-9'>Ikuti Kami terus untuk update seputar info akademik </h1>
            <h2 className='text-2xl text-slate-100 font-semibold text-center'>Kuliah? BSI Aja!!!</h2>
         </div>
      </div>

      {/* FOOTER */}
      <footer>
         <div className={styles.top}>
            <div>
               <img src={Logo}/>
            </div>
            <div>
               <h1 className='mb-3 text-xl font-semibold text-slate-800'>Pengumuman</h1>
               <p className={styles.p}>Info Akademik</p>
               <p className={styles.p}>Info Ujian</p>
               <p className={styles.p}>Info sidang TA/Skripsi</p>
               <p className={styles.p}>Info Wisuda</p>
            </div>
            <div>
               <h1 className='mb-3 text-xl font-semibold text-slate-800'>Platform</h1>
               <p className={styles.p}>Mybest</p>
               <p className={styles.p}>Ikan Mahasiswa</p>
               <p className={styles.p}>MyUBSI Student</p>
            </div>
            <div>
               <h1 className='mb-3 text-xl font-semibold text-slate-800'>Kontak Kami</h1>
               <p className={styles.p}>Jl. Kramat Raya No.98</p>
               <p className={styles.p}>(021)8000063</p>
               <p className={styles.p}>info@bsi.ac.id</p>
            </div>
         </div>
         <div className={styles.bottom}>
            <div className={styles.link}>
               <a href="https://www.instagram.com/muhamadamujib/" target='_blank' className={styles.p}><img src={I} className='w-6'/>instagram</a>
               <a href="#" className={styles.p}><img src={Y} className='w-6'/>youtube</a>
               <a href="https://www.linkedin.com/in/muhamadamujib" target='_blank' className={styles.p}><img src={L} className='w-6'/>linkedin</a>
               <a href="#" className={styles.p}><img src={P} className='w-6'/>playstore</a>
            </div>
            <div className=''>
               <p className='text-sm text-white w-1/3 mt-3'>@2023 SISFO AKADEMIK MAHASISWA - Universitas Bina Sarana Informatika ALL RIGHT RESERVED</p>
            </div>
         </div>
      <div className={styles.circle6}></div>
      <div className={styles.circle7}></div>
      </footer>
   </>
   )
}
export default LandingPage;