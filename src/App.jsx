/* import { useGlobalProvider } from './contexts/GlobalContext'; */
import FavouritesContext from './contexts/FavouritesContext';
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import CharacterPage from "./pages/CharacterPage";

export default function App() {

  const [favourites, setFavourites] = useState([])
  /* const {fetchData} = useGlobalProvider() */
 
  

  function toggleFavourites(id) {
    console.log(id);
    if (!isFavourite(id)) {
      setFavourites([id, ...favourites])
    } else {
      removeFavourite(id)
    }

  }

  function removeFavourite(id) {

    const filtered = favourites.filter(favId => favId !== id)
    setFavourites(filtered)

  }


  function isFavourite(id) {
    return favourites.includes(id)
  }



/*   useEffect(fetchData, []) */

  return (

    <>

   
        <FavouritesContext.Provider value={{ setFavourites, favourites, isFavourite, toggleFavourites }} >

          <BrowserRouter>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/characters" element={<CharactersPage />} />
                <Route path="/characters/:id" element={<CharacterPage />} />
                <Route path="/contacts" element={<h1>Contacts page</h1>} />

              </Route>
            </Routes>
          </BrowserRouter>

        </FavouritesContext.Provider>
     



    </>
  )
}