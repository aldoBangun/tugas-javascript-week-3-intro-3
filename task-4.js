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

const printUsersName = (data) => {
   const names = data.map(item => item.name)
   console.log(names)
}

const getUsersName = async (url) => {
   if (typeof url !== 'string') return console.log('url should be a valid string')

   try {
      const res = await axios.get(url)
      printUsersName(res.data)

   } catch(err) {
      errorHandler(err)
   }
}

getUsersName(url)