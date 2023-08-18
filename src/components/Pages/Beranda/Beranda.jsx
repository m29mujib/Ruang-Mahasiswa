import styles from './Beranda.module.css'
import Meja from '../../../assets/meja.png'
import Jam from '../../../assets/jam.png'
import Tas from '../../../assets/tas.png'
import Orang from '../../../assets/orang.png'
import Laptop from '../../../assets/laptop.png'
import Ceklis from '../../../assets/ceklis.png'
import Book from '../../../assets/book.png'
import Calendar from 'react-calendar';
import { useState } from 'react'
const Beranda = () => {
   const [data, setDate] = useState(new Date())

   const onChange = date => {
      setDate(date)
   } 
   return(
      <div className={styles.wrap}>
         <div className={styles.wrapTop}> 
            <div className={styles.card}>
               <div className={styles.cardLeft}>
                  <img src={Meja} className={styles.icon}/>
               </div>
               <div className={styles.cardRight}>
                  <h1 className='text-sm font-semibold'>Kegiatan Akademik</h1>
                  <p className={styles.deskripsi}>Info seputar nilai, jadwal kuliah, ujian dll</p>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.cardLeft}>
                  <img src={Tas} className={styles.icon}/>
               </div>
               <div className={styles.cardRight}>
                  <h1 className='text-sm font-semibold'>Mahasiswa</h1>
                  <p className={styles.deskripsi}>Info seputar data akademik mahasiswa, KRS serta IPK</p>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.cardLeft}>
                  <img src={Jam} className={styles.icon}/>
               </div>
               <div className={styles.cardRight}>
                  <h1 className='text-sm font-semibold'>PKL dan Riset</h1>
                  <p className={styles.deskripsi}>Info seputar dosen pembimbing PKL dan juga pengajuan surat</p>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.cardLeft}>
                  <img src={Orang} className={styles.icon}/>
               </div>
               <div className={styles.cardRight}>
                  <h1 className='text-sm font-semibold'>Skripsi,TA ,Wisuda</h1>
                  <p className={styles.deskripsi}>Info seputar jadwal bimbingan TA serta pedoman Skripsi/TA</p>
               </div>
            </div>
            <div className={styles.card}>
               <div className={styles.cardLeft}>
                  <img src={Laptop} className={styles.icon}/>
               </div>
               <div className={styles.cardRight}>
                  <h1 className='text-sm font-semibold '>Ujian</h1>
                  <p className={styles.deskripsi}>info seputar jadwal ujian, mata kuliah yang diujikan</p>
               </div>
            </div>
         </div>
         <div className={styles.wrapBottom}>
            <div className={styles.wrapBottomLeft}>
               <div className={styles.green}>
                  <div className={styles.deskGreen}>
                     <h1 className='mb-5 text-slate-800 font-semibold'>Semester 5</h1>
                     <h2 className='text-slate-800 font-semibold'>Kampus PSDKU Bogor B Merdeka</h2>
                     <p className='text-slate-800 font-semibold'>Sistem Informasi (D3)</p>
                     <h2 className='mt-5 text-slate-800 font-semibold'>Status Mahasiswa : Aktif</h2>
                  </div>
                  <div className={styles.circle}></div>
                  <div className={styles.circleTwo}></div>
               </div>
               <div className={styles.blue}>
                  <div className={styles.desk}>
                     <h1 className='text-slate-100 font-semibold'>Verifikasi Data Pribadi</h1>
                     <p className='text-slate-100 text-sm'>Silahkan verifikasi data pribadi anda untuk keperluan akademik</p>
                  </div>
                  <div className={styles.wrapBtn}>
                     <button className={styles.btn}>Verifikasi</button>
                  </div>
                  <div className={styles.absol}><img src={Ceklis} className='w-20'/></div>
                  <div className={styles.circleThree}></div>
               </div>
            </div>
            <div className={styles.wrapBottomRight}>
               <Calendar onChange={onChange} value={data} className={styles.calender}/>
               <div className={styles.orange}>
                  <div className={styles.brown}></div>
                  <div className={styles.brownTwo}></div>
                  <div className={styles.image}><img src={Book} className='w-20'/></div>
               </div>
            </div>
         </div>

         <div className={styles.akademik}>
            <div className={styles.akademikTop}>
               <h1 className='text-green-600 font-bold'>Info Akademik</h1>
               <input type="text" placeholder='cari info akademik' className={styles.input}/>
            </div>
            <div className={styles.akademikBottom}>
               <div className={styles.pengumuman}>
                  <h1 className='text-sky-700 font-semibold'>Pengumuman Sosialisasi Outline Tugas Akhir Mhs Semester 6 Prodi Administrasi Bisnis (27 Februari 2023)</h1>
                  <p>Update : 15 Februari 2023</p>
               </div>
               <div>
                  <button className={styles.btn}>Lihat Info</button>
               </div>
            </div>
            <div className={styles.akademikBottom}>
               <div className={styles.pengumuman}>
                  <h1 className='text-sky-700 font-semibold'>Pengumuman Sosialisasi Tugas Akhir Mhs Semester 6 Prodi SI Surakarta (24 Februari 2023)</h1>
                  <p>Update : 15 Februari 2023</p>
               </div>
               <div>
                  <button className={styles.btn}>Lihat Info</button>
               </div>
            </div>
            <div className={styles.akademikBottom}>
               <div className={styles.pengumuman}>
                  <h1 className='text-sky-700 font-semibold'>Edaran Pendaftaran Pandu Muda Indonesia Tahun 2023</h1>
                  <p>Update : 13 Februari 2023</p>
               </div>
               <div>
                  <button className={styles.btn}>Lihat Info</button>
               </div>
            </div>
            <div className={styles.akademikBottom}>
               <div className={styles.pengumuman}>
                  <h1 className='text-sky-700 font-semibold'>Pengumuman Sosialisasi Skripsi Mhs Semester 7 Prodi Manajemen (15 Februari 2023)</h1>
                  <p>Update : 13 Februari 2023</p>
               </div>
               <div>
                  <button className={styles.btn}>Lihat Info</button>
               </div>
            </div>
            <div className={styles.akademikBottom}>
               <div className={styles.pengumuman}>
                  <h1 className='text-sky-700 font-semibold'>Pengumuman Kegiatan Sosialisasi Skripsi Mhs Semester 7 Prodi Akuntasi (S1) (14 Februari 2023)</h1>
                  <p>Update : 09 Februari 2023</p>
               </div>
               <div>
                  <button className={styles.btn}>Lihat Info</button>
               </div>
            </div>
         </div>
      </div>
   )
} 
export default Beranda