import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import CharacterDetailCard from "../components/CharacterDetailCard";

export default function CharacterPage() {
  const { id } = useParams()
  const [character, setCharacter] = useState({})

  function fetchData() {

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        console.log(response);
        setCharacter(response.data)
      }).catch(err => {
        console.log(err);
      })
  }

  useEffect(fetchData, [])


  return (

    <>

      <CharacterDetailCard character={character} />

    </>


  )
}