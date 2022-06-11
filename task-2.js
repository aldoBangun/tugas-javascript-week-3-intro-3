const getMonths = (callback) => {
   setTimeout(()=>{
      let error = true
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December']

      if(!error) {
         callback(null, months)
      } else {
         callback(new Error('Sorry Data not Found'), [])
      }

   }, 4000)
}

const printMonths = (err, months) => {
   new Promise((resolve, reject) => err ? reject(err) : resolve(months))
      .then(months => months.map(month => console.log(month)))
      .catch(err => console.log(err.message))
}

getMonths(printMonths)