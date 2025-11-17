import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function CharactersPage() {
  const [characters, setCharacters] = useState([])


  function fetchData() {

    axios.get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        console.log(response);
        setCharacters(response.data.results)
      }).catch(err => {
        console.log(err);
      })
  }



  useEffect(fetchData, [])



  return (
    <>
     <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Rick And Morty API</h1>
        <p className="col-md-8 fs-4">
          Using a series of utilities, you can create this jumbotron, just
          like the one in previous versions of Bootstrap. Check out the
          examples below for how you can remix and restyle it to your liking.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
     </div>
     

      <section className='mb-3'>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {characters.map(character => (
              <div className="col">
                <div className="card h-100">
                  <img className="card-img-top" src={character.image} />
                  <div className="card-body">
                    <h3 className="card-title">{character.name}</h3>
                    <Link className='btn btn-dark' to={`/characters/${character.id}`}>View Character</Link>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

    </>


  )
}