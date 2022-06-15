const validasiInput = (userInput) => {
   const tidakKosong = userInput === null || userInput === undefined 

   if(tidakKosong) {
      return { error: true, message: 'Input tidak boleh kosong' }
   }

   if(typeof userInput !== 'string') {
      return { error: true, message: 'Input harus berbentuk string' }
   }

   if(userInput.trim() === '') {
      return { error: true, message: 'Input tidak boleh kosong' }
   }
   
   return { error: false, message: '' }
}

const cekHariKerja = (day) => {   
   return new Promise((resolve, reject) => {
      setTimeout(async ()=>{
         try{
            const { error, message } = validasiInput(day)

            if(error) {
               reject(new Error(message))
            }

            const dataDays = await Promise.resolve(['senin', 'selasa', 'rabu', 'kamis', 'jumat'])
            let cek = dataDays.find((item) => {
               return item === day.toLowerCase()
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

cekHariKerja('KAMIS  ')
   .then(res => console.log(`Hari ${res} adalah hari kerja`))
   // then digunakan untuk melanjutkan program jika promise di resolve
   .catch(err => console.log(err.message))
   // catch digunakan untuk melanjutkan program jika promise di reject