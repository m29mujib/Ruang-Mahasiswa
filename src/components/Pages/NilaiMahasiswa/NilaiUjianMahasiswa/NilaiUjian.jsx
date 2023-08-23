import styles from './NilaiUjianMahasiswa.module.css'
import Download from '../../../../assets/downloads.png'
const NilaiUjian = () => {
    const data = [
  { kode: 'MK101', mataKuliah: 'Matematika Dasar', sks: 4, nilaiUts: '90', nilaiUas: '85', nilaiTugas: '95', nilaiAbsen: '100', grade:'A'},
  { kode: 'MK102', mataKuliah: 'Fisika Dasar', sks: 4, nilaiUts: '80', nilaiUas: '85', nilaiTugas: '90', nilaiAbsen: '100', grade:'A'},
  { kode: 'MK103', mataKuliah: 'Web Programming', sks: 6, nilaiUts: '78', nilaiUas: '80', nilaiTugas: '99', nilaiAbsen: '100', grade:'A' },
  { kode: 'MK104', mataKuliah: 'Sistem Basis Data', sks: 3, nilaiUts: '80', nilaiUas: '70', nilaiTugas: '85', nilaiAbsen: '90', grade:'B'},
  { kode: 'MK105', mataKuliah: 'Struktur Data', sks: 6,nilaiUts: '95', nilaiUas: '90', nilaiTugas: '100', nilaiAbsen: '100', grade:'A'},
  { kode: 'MK106', mataKuliah: 'Mobile Programming', sks: 10, nilaiUts: '90', nilaiUas: '85', nilaiTugas: '95', nilaiAbsen: '100', grade:'A'},
  { kode: 'MK107', mataKuliah: 'PAI', sks: 3, nilaiUts: '80', nilaiUas: '88', nilaiTugas: '95', nilaiAbsen: '100', grade:'A'},
  { kode: 'MK108', mataKuliah: 'PTIK', sks: 4, nilaiUts: '100', nilaiUas: '90', nilaiTugas: '95', nilaiAbsen: '100', grade:'A'},
  { kode: 'MK109', mataKuliah: 'B. Indonesia', sks: 9, nilaiUts: '95', nilaiUas: '80', nilaiTugas: '100', nilaiAbsen: '100', grade:'A'},
  { kode: 'MK110', mataKuliah: 'B. Inggris', sks: 5, nilaiUts: '90', nilaiUas: '85', nilaiTugas: '95', nilaiAbsen: '100', grade:'A'},
  { kode: 'MK101', mataKuliah: 'Matematika Dasar', sks: 4, nilaiUts: '60', nilaiUas: '75', nilaiTugas: '80', nilaiAbsen: '80', grade:'C'},
  { kode: 'MK103', mataKuliah: 'Web Programming', sks: 6, nilaiUts: '90', nilaiUas: '75', nilaiTugas: '70', nilaiAbsen: '90', grade:'B'},
  { kode: 'MK105', mataKuliah: 'Struktur Data', sks: 6, nilaiUts: '80', nilaiUas: '85', nilaiTugas: '95', nilaiAbsen: '100', grade:'A'},
  { kode: 'MK109', mataKuliah: 'B. Indonesia', sks: 9, nilaiUts: '95', nilaiUas: '75', nilaiTugas: '100', nilaiAbsen: '100', grade:'A'}


];
   return(
      <div className={styles.wrap}>
         <div className={styles.wrapChild}>
            <div className={styles.top}>
               <h1 className="text-lg text-green-600 font-semibold">Nilai Mahasiswa</h1>
            </div>
            <div className={styles.bottom}>
               <div className={styles.ipk}>
                  <p className="pt-5 pb-20 pl-5 pr-5 text-white font-semibold">IPK yang diperoleh saat ini</p>
                  <p className="pl-5 pb-5 pt-5 pr-5 text-white text-xl font-semibold">IPK 4.00</p> 
               </div>
               <div className={styles.sks}>
                  <p className="pt-5 pb-20 pl-5 pr-5 text-white font-semibold">Total SKS yang telah diambil</p>
                  <p className="pl-5 pb-5 pt-5 pr-5 text-white text-xl font-semibold">97 SKS</p>
               </div>
               <div className={styles.semester}>
                  <p className="pt-5 pb-20 pl-5 pr-5 text-white font-semibold">Semester Saat ini</p>
                  <p className="pl-5 pb-5 pt-5 pr-5 text-white text-xl font-semibold">Semester 5</p>
               </div>
            </div>
         </div>
         <div className='flex justify-evenly mt-8 bg-slate-100 p-3 rounded-md'>
            <p>Nilai UTS</p>
            <p>Nilai UAS</p>
            <p>Hasil Ujian Murni</p>
            <p>Nilai UAS Non OCR</p>
            <p>Nilai HER Non OCR</p>
         </div>
         <div className={styles.tabelNilai}>
            <h1 className="text-lg font-bold text-green-600 mb-10">Nilai Ujian Semester 5</h1>
           <table className="w-full">
               <thead>
               <tr>
                  <th className="text-cyan-600">Kode</th>
                  <th className="text-cyan-600">Mata Kuliah</th>
                  <th className="text-cyan-600">SKS</th> 
                  <th className="text-cyan-600">Nilai UTS</th>
                  <th className="text-cyan-600">Nilai UAS</th>
                  <th className="text-cyan-600">Nilai TUGAS</th>
                  <th className="text-cyan-600">Nilai ABSEN</th>
                  <th className="text-cyan-600">Grade</th>
               </tr>
               </thead>
               <tbody>
               {data.map((item, index) => (
                  <tr key={index}>
                     <td className="text-center pt-5 border-b p-3">{item.kode}</td>
                     <td className="text-center pt-5 border-b p-3">{item.mataKuliah}</td>
                     <td className="text-center pt-5 border-b p-3">{item.sks}</td>
                     <td className="text-center pt-5 border-b p-3">{item.nilaiUts}</td>
                     <td className="text-center pt-5 border-b p-3">{item.nilaiUas}</td>
                     <td className="text-center pt-5 border-b p-3">{item.nilaiTugas}</td>
                     <td className="text-center pt-5 border-b p-3">{item.nilaiAbsen}</td>
                     <td className="text-center pt-5 border-b p-3">{item.grade}</td>              
                  </tr>
               ))}
               </tbody>
           </table>
         <button className={styles.btn} onClick={() => alert("BELOM BISA SABARRR..")}><img src={Download} className='mr-3'/>Cetak Nilai Murni</button>
         </div>
      </div>
   )
}
export default NilaiUjian