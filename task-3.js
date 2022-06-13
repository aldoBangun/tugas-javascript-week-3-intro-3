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

      movies.length
         ? resolve(movies)
         : reject(new Error('Movies not found'))
   })
}

const getMovies = () => {
   return new Promise(async (resolve, reject) => {
      try {
         const response = await fetchMovies()
   
         setTimeout(()=> {
            response
               ? resolve(response)
               : reject(new Error('Failed to Fetch'))
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

      user ? resolve(user) : reject('User not Found')
   })
}

const validateUser = (uname, pass) => {
   return new Promise((resolve, reject) => {
      setTimeout(async () => {
         try {
            const user = await fetchUser()
            const { username, password } = user

            if(uname === username && pass === password) {
               resolve('Successfully logged in')
            } else {
               reject(new Error('Invalid Email or Password'))
            }

         } catch (err) {
            reject(err)
         }
      }, 1000)
   })
}

validateUser('aldobangun', 'javascript')
   .then(response => console.log(response))
   .catch(err => console.log(err.message))