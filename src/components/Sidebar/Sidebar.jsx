import styles from './Sidebar.module.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import Home from '../../assets/home.png'
import Nilai from '../../assets/document.png'
import Surat from '../../assets/email.png'
import Info from '../../assets/information.png'
import Logout from '../../assets/exit.png'
const Sidebar = () => {
   return(
      <div className={styles.sidebar}>
         <div className={styles.logo}>
            <img src={Logo}/>
         </div>
         <div className={styles.link}>
            <Link to="/beranda" className={styles.linkTo}><a href="#"><img src={Home} className={styles.img}/></a>Beranda</Link>
            <Link to="/nilai" className={styles.linkTo}><a href="#"><img src={Nilai}className={styles.img}/></a>Nilai Mahasiswa</Link>
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