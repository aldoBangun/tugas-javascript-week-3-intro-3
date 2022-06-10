const getMonths = (callback) => {
   setTimeout(()=>{
      let error = false
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December']

      if(!error) {
         callback(null, months)
      } else {
         callback(new Error('Sorry Data not Found'), [])
      }

   }, 4000)
}

const printMonths = (err, months) => {
   if(err) return console.log(err)   
   months.map(month => console.log(month))
}

getMonths(printMonths)