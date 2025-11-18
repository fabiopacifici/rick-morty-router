import CharacterCard from "./CharacterCard";

export default function CharactersList({characters}){


  return (
    <>
      <section className='mb-3'>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {characters.map(character => (
              <CharacterCard key={character.id} character={character} />              
            ))}
          </div>
        </div>
      </section>
    
    </>
  )
}