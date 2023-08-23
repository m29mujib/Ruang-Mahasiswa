import styles from './Sidebar.module.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import Home from '../../assets/home.png'
import Nilai from '../../assets/document.png'
import Surat from '../../assets/email.png'
import Info from '../../assets/information.png'
import Logout from '../../assets/exit.png'
import Khs from '../../assets/semester.png'
import Ujian from '../../assets/administration.png'
import { useState } from 'react'
const Sidebar = () => {
   const [openDropDown, setOpenDropDown] = useState(false)

   return(
      <div className={styles.sidebar}>
         <div className={styles.logo}>
            <img src={Logo}/>
         </div>
         <div className={styles.link}>
            <Link to="/beranda" className={styles.linkTo}><a href="#"><img src={Home} className={styles.img}/></a>Beranda</Link>
            <p className={styles.linkDropDown}>
               <div className='nl' onClick={(()=> setOpenDropDown((prev) => !prev))}>
                 <p className={styles.nilaiMhs}><img src={Nilai} className={styles.img}/>Nilai Mahasiswa</p>
               </div>
               {
                  openDropDown&& (
                     <div className={styles.dropdown}>
                        <Link to="/khs" className='mb-5 text-green-700 font-semibold flex'><img src={Khs} className={styles.img}/>Khs Semester</Link>
                        <Link to="/ujian" className='mb-5  text-green-700 font-semibold flex'><img src={Ujian} className={styles.img}/>Nilai Ujian</Link>
                     </div>
                  )
               }
               
            </p>
            <Link to="/surat" className={styles.linkTo}><a href="#"><img src={Surat} className={styles.img}/></a>Surat</Link>
            <Link to="/info" className={styles.linkTo}><a href="#"><img src={Info} className={styles.img}/></a>Info Akademik</Link>
         </div>
         <div className={styles.btnLogout}>
            <button className={styles.btn}><img src={Logout} className='mr-3'/>Logout</button>
         </div>
      </div> 
   ) 
} 
export default Sidebar