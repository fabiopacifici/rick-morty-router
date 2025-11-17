import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import CharacterPage from "./pages/CharacterPage";

export default function App() {


  return (

    <>


      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}  />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/characters/:id" element={<CharacterPage />} />
            <Route path="/contacts" element={<h1>Contacts page</h1>} />

          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}