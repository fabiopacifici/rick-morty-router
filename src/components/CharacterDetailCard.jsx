import { useContext } from "react"
import { Link } from "react-router-dom"
import FavouritesContext from "../contexts/FavouritesContext"



export default function CharacterDetailCard({character}){


  const { toggleFavourites, isFavourite } = useContext(FavouritesContext)
 
  
  return (

    <div className="col-4 mx-auto mt-5">
     
      <div className="card shadow-lg">
        <img className="card-img-top" src={character?.image} alt="" />
        <div className="card-body">
          <button className="like btn" onClick={() => toggleFavourites(character.id)}>
            <i className={`bi bi-heart${isFavourite(character.id) ? '-fill' : '' }`}></i>
          </button>
          <h4 className="card-title">{character?.name}</h4>
          <div>Status: {character?.status}</div>
          <div>Specie: {character?.species}</div>
          <Link className='btn btn-dark' to={`/characters`}><i className="bi bi-arrow-left"></i>Back</Link>
        </div>
      </div>
    </div>

  )
}