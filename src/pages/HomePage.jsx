import { useGlobalProvider } from "../contexts/GlobalContext"

export default function HomePage(){

  // get the context object
  // const favContext = useContext(FavouritesContext)
  //console.log(favContext);
  // destructure the context object to grab the values
  const {characters} = useGlobalProvider()
  console.log(characters);
  
  
  //console.log(characters);
  
  return (

    <>
    
        <h1>This is the home page</h1>
    
    </>
  )
}