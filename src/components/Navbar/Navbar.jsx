import styles from "./Navbar.module.css"
import Lonceng from '../../assets/ringing.png'
import Mujib from '../../assets/ganteng.jpeg'
const Navbar = () => {
   // const nim = localStorage.getItem("Nim")
   return(
      <div className={`w-full ${styles.navbar}`}>
        <div className={styles.left}>
            <h2 className="text-xl text-slate-900 font-bold">Selamat Datang..</h2>
            <p className="text-sm font-bold text-green-600">Mau cari informasi akademik apa hari ini.....</p>
        </div>
        <div className={styles.right}>
            <div className="flex mr-5">
               <a href="#" className="mr-4"><img src={Lonceng} className="w-8"/></a>
               <p><img src={Mujib} className={styles.mujib}/></p>
            </div>
            <div>
               <p className="text-center text-xs font-semibold">{nim}</p>
               <button className={styles.btn}>Online</button>
            </div>
        </div> 
      </div> 
   )
} 

export default Navbar