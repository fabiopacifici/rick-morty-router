import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'
// 1. Creo il contesto
const GlobalContext = createContext()


// 2. creo il componente custom provider
function GlobalProvider({ children }) {

  const [fabio, setFabio] = useState('This is fab')
  const [characters, setCharacters] = useState([])

  // Read the .env file
  const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY
  function fetchData() {

    axios.get(`https://rickandmortyapi.com/api/character?api_key=${api_key}`)
      .then(response => {
        console.log(response);
        setCharacters(response.data.results)
      }).catch(err => {
        console.log(err);
      })
  }
  useEffect(fetchData, [])

  // 3. definisco i value da passare al provider (componente)
  const values = {
    characters,
    setCharacters,
    fetchData
  }

  // 4. Return the Provider component for your context
  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>

  )

}


// 5. Create your custom hook to consume the provider
function useGlobalProvider() {

  return useContext(GlobalContext)
}



export { GlobalProvider, useGlobalProvider }
