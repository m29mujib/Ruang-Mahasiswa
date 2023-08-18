import styles from './Surat.module.css'
const Surat = () => {
   return(
      <div className={styles.wrap}>
         <div className={styles.wrapChild}>
            <div className={styles.top}>
               <h1 className="text-lg text-green-600 font-semibold">Surat & Pengajuan</h1>
            </div>
            <div className={styles.bottom}>
               <div className={styles.pengajuan}>
                  <div>
                     <p className="pb-3 text-white font-semibold">Pengajuan Cuti dan Mutasi</p>
                     <p className=" text-white text-sm ">Silahkan gunakan menu ini jika ingin melakukan pengajuan cuti akademik ataupun ingin melakukan mutasi kampus</p>
                  </div>
                  <div className={styles.btn}>
                     <button className={styles.btnBlue}>Mulai Pengajuan</button> 
                  </div>
               </div>
               <div className={styles.riset}>
                  <div>
                     <p className="pb-3 text-white font-semibold">Buat Surat Riset dan PKL</p>
                     <p className=" text-white text-sm">Silahkan gunakan menu ini untuk 
                     melakukan pembuatan surat riset ataupun surat PKL pada mitra tempat magang anda</p>        
                  </div>
                  <div className={styles.btn}>
                     <button className={styles.btnBrown}>Buat Surat</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Surat