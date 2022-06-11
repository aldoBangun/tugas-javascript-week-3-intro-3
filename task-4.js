const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'

const errorHandler = (err) => {
   if(err?.response) {
      const { status } = err.response
      
      if(status === 404) {
         return console.log('Data not found!')
      } 
   }

   console.log(err.message)
}

const getUsersName = async (url, callback) => {
   try {
      const res = await axios.get(url)
      callback(res.data)
   } catch(err) {
      errorHandler(err)
   }
}

const printUsersName = (data) => {
   const names = data.map(item => item.name)
   console.log(names)
}

getUsersName(url, printUsersName)