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
         <div className={styles.wrapChildTwo}>
            <h1 className='mb-4 text-green-700 font-semibold text-xl'>Buat Surat Keterangan</h1>
            <p className='mb-10 font-semibold'>Di dalam menu ini anda dapat membuat surat keterangan online untuk berbagai pengajuan dan lain sebagainya yang berhubungan dengan akademik. Gunakan fasilitas ini dengan sebaik - baiknya dan bijaksana.</p>
            <form className={styles.form}>
               <div className='flex flex-col mb-5'>
                  <label htmlFor="" className='text-sky-600 mb-3 font-semibold'>Jenis Surat Keterangan</label>
                  <select id="cars" name="carlist" form="carform" className={`w-full ${styles.select}`}>
                        <option value="D-III">Pilih jenis surat keterangan</option>
                        <option value="Her">Her</option>
                        <option value="Izin">Izin</option>
                        <option value="Sakit">Sakit</option>
                  </select>
               </div>
               <div className='flex flex-col'>
                  <label htmlFor=""  className='text-sky-600 mb-3 font-semibold'>Isi Surat keterangan anda</label>
                  <textarea type="text" placeholder='Ketik Surat keterangan disini.....' className={styles.input}/>
               </div>
            </form>
            <div className='flex justify-center'>
               <button className={styles.btnCetak} onClick={()=> window.prompt("DIBILANG BELOM BISA!! MAU KELUAR SENDIRI ATAU KITA KICK? JAWABB")}>Proses Dan Cetak</button>
            </div>
         </div>
      </div>
   )
}
export default Surat