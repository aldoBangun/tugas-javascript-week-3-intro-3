const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'

const getUsersName = async (url, callback) => {
   const res = await axios.get(url)
   callback(res.data)
}

const printUsersName = async (data) => {
   const names = data.map(item => item.name)
   console.log(names)
}

getUsersName(url, printUsersName)

// Notes :
// - Add try / catch soon