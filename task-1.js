const cekHariKerja = (day) => {
   return new Promise((resolve, reject) => {
      setTimeout(()=>{
         try{
            const dataDays = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDays.find((item) => {
               return item === day
            })
   
            if(cek) {
               resolve(cek)
            } else {
               throw new Error('Hari ini bukan hari kerja')
            }
         } catch(err) {
            reject(err.message)
         }
      }, 3000)

   })
}

cekHariKerja('kamis')
   .then(res => console.log(res))
   .catch(err => console.log(err))