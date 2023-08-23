import styles from "./KhsMahasiswa.module.css"
const KhsMahasiswa = () => {
   const data = [
  { kode: 'MK101', mataKuliah: 'Matematika Dasar', sks: 4, nilai: 'A', mutu: 4.00, keterangan: 'Lulus' },
  { kode: 'MK102', mataKuliah: 'Fisika Dasar', sks: 4, nilai: 'B', mutu: 3.00, keterangan: 'Lulus' },
  { kode: 'MK103', mataKuliah: 'Web Programming', sks: 6, nilai: 'A', mutu: 2.00, keterangan: 'Lulus' },
  { kode: 'MK104', mataKuliah: 'Sistem Basis Data', sks: 3, nilai: 'A', mutu: 2.00, keterangan: 'Lulus' },
  { kode: 'MK105', mataKuliah: 'Struktur Data', sks: 6, nilai: 'C', mutu: 2.00, keterangan: 'Tidak Lulus' },
  { kode: 'MK106', mataKuliah: 'Mobile Programming', sks: 10, nilai: 'B', mutu: 2.00, keterangan: 'Lulus' },
  { kode: 'MK107', mataKuliah: 'PAI', sks: 3, nilai: 'A', mutu: 2.00, keterangan: 'Lulus' },
  { kode: 'MK108', mataKuliah: 'PTIK', sks: 4, nilai: 'A', mutu: 2.00, keterangan: 'Lulus' },
  { kode: 'MK109', mataKuliah: 'B. Indonesia', sks: 9, nilai: 'A', mutu: 2.00, keterangan: 'Lulus' },
  { kode: 'MK110', mataKuliah: 'B. Inggris', sks: 5, nilai: 'B', mutu: 2.00, keterangan: 'Lulus' },
  { kode: 'MK101', mataKuliah: 'Matematika Dasar', sks: 4, nilai: 'A', mutu: 4.00, keterangan: 'Lulus' },
  { kode: 'MK103', mataKuliah: 'Web Programming', sks: 6, nilai: 'A', mutu: 2.00, keterangan: 'Lulus' },
  { kode: 'MK105', mataKuliah: 'Struktur Data', sks: 6, nilai: 'C', mutu: 2.00, keterangan: 'Tidak Lulus' },
  { kode: 'MK109', mataKuliah: 'B. Indonesia', sks: 9, nilai: 'A', mutu: 2.00, keterangan: 'Lulus' }


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
         <div className={styles.tabelNilai}>
            <h1 className="text-lg font-bold text-green-600 mb-10">Kartu Hasil Studi Saat Ini</h1>
           <table className="w-full">
               <thead>
               <tr>
                  <th className="text-cyan-600">Kode</th>
                  <th className="text-cyan-600">Mata Kuliah</th>
                  <th className="text-cyan-600">SKS</th> 
                  <th className="text-cyan-600">Nilai</th>
                  <th className="text-cyan-600">Mutu</th>
                  <th className="text-cyan-600">Keterangan</th>
               </tr>
               </thead>
               <tbody>
               {data.map((item, index) => (
                  <tr key={index}>
                     <td className="text-center pt-5 border-b p-3">{item.kode}</td>
                     <td className="text-center pt-5 border-b p-3">{item.mataKuliah}</td>
                     <td className="text-center pt-5 border-b p-3">{item.sks}</td>
                     <td className="text-center pt-5 border-b p-3">{item.nilai}</td>
                     <td className="text-center pt-5 border-b p-3">{item.mutu}</td>
                     <td className="text-center pt-5 border-b p-3">{item.keterangan}</td>
                  </tr>
               ))}
               </tbody>
           </table>
         </div>
      </div>
   )
}
export default KhsMahasiswa 