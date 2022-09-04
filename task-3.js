// Program  1
const fetchMovies = () => {
   return new Promise((resolve, reject) => {
      const movies = [
         {
            id: '1',
            title: 'The Avengers'
         },
         {
            id: '2',
            title: 'Justice League'
         }
      ]

      if (movies.length) return resolve(movies)
      reject(new Error('Movies not found'))
   })
}

const getMovies = () => {
   return new Promise(async (resolve, reject) => {
      try {
         const response = await fetchMovies()
   
         setTimeout(()=> {
            if (response) return resolve(response)
            reject(new Error('Failed to Fetch'))
         }, 1000)

      } catch(err) {
         console.log(err.message)
      }
   })
}

// Main Function
const printMovies = async () => {
   try {
      const response = await getMovies()   
      console.log(response)

   } catch(err) {
      console.log(err.message)
   }
}

printMovies()


// Program 2
const fetchUser = () => {
   return new Promise((resolve, reject) => {
      const user = {
         username: 'aldobangun',
         password: 'javascript'
      }

      if (user) return resolve(user) 
      reject(new Error('User not Found'))
   })
}

const validateUser = (uname, pass) => {
   return new Promise((resolve, reject) => {
      if (typeof uname !== 'string') return reject('Username should be a valid string')
      if (typeof pass !== 'string') return reject('Password should be a valid string')
      if (pass.length < 6) return reject('Password should be 6 or more characters')

      setTimeout(async () => {
         try {
            const user = await fetchUser()
            const { username, password } = user

            if(uname === username && pass === password) return resolve('Successfully logged in')
            reject(new Error('Invalid Email or Password'))

         } catch (err) {
            reject(err)
         }
      }, 1000)
   })
}

validateUser('aldobangun', 'javascript')
   .then(response => console.log(response))
   .catch(err => console.log(err.message))