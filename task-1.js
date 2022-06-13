const cekHariKerja = (day) => {
   return new Promise((resolve, reject) => {
      setTimeout(async ()=>{
         try{
            const dataDays = await Promise.resolve(['senin', 'selasa', 'rabu', 'kamis', 'jumat'])
            let cek = dataDays.find((item) => {
               return item === day
            })
   
            if(cek) {
               resolve(cek)
            } else {
               reject(new Error('Hari ini bukan hari kerja'))
            }

         // Blok try digunakan untuk menjalankan program sambil mengetes apakah ada error atau tidak
         } catch(err) {
            reject(err)
         }
         // Blok catch digunakan untuk menangkap segala bentuk kesalahan / error yang terjadi dalam blok try
      }, 3000)
   })
}

cekHariKerja('kamis')
   .then(res => console.log(`Hari ${res} adalah hari kerja`))
   // then digunakan untuk melanjutkan program jika promise di resolve
   .catch(err => console.log(err.message))
   // catch digunakan untuk melanjutkan program jika promise di reject