import { useContext } from "react"
import { Link } from "react-router-dom"
import FavouritesContext from "../contexts/FavouritesContext"

export default function CharacterCard({character}){

  const { toggleFavourites, isFavourite } = useContext(FavouritesContext)


  return (
    <div className="col">
      <div className="card h-100">
        <img className="card-img-top" src={character.image} />
        <div className="card-body">
          <button className="like btn" onClick={() => toggleFavourites(character.id)}>
            <i className={`bi bi-heart${isFavourite(character.id) ? '-fill' : ''}`}></i>
          </button>
          <h3 className="card-title">{character.name}</h3>
          <Link className='btn btn-dark' to={`/characters/${character.id}`}>View Character</Link>
        </div>
      </div>
    </div>

  )
}