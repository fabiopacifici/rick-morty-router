import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

export default function CharacterPage() {
  const { id } = useParams()
  const [character, setCharacter] = useState({})
  console.log(id);

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

      <div className="col-4 mx-auto mt-5">
        <div className="card shadow-lg">
          <img className="card-img-top" src={character?.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{character?.name}</h4>
            <div>Status: {character?.status}</div>
            <div>Specie: {character?.species}</div>
            <Link className='btn btn-dark' to={`/characters`}><i class="bi bi-arrow-left"></i>Back</Link>
          </div>
        </div>
      </div>

    </>


  )
}