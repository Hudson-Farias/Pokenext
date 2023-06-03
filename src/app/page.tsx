import { PokedexSearch } from "../components/pokedex-search"
import { Pokemon } from "../components/pokemon"
import { PokedexViewer } from "../components/pokedex-viewer"
// import { Pokeball } from "../components/pokeball"

const PokedexPage = async () => {
  const response = await fetch('https://pokemon-api-ddmm.onrender.com/pokemon/')
  const pokemons = await response.json()
  // const pokemons = [{"id":1,"name":"bulbasaur"},{"id":2,"name":"ivysaur"},{"id":3,"name":"venusaur"},{"id":4,"name":"charmander"},{"id":5,"name":"charmeleon"},{"id":6,"name":"charizard"},{"id":7,"name":"squirtle"},{"id":8,"name":"wartortle"},{"id":9,"name":"blastoise"},{"id":10,"name":"caterpie"},{"id":11,"name":"metapod"},{"id":12,"name":"butterfree"},{"id":13,"name":"weedle"}]
  
  return (
    <main>
      {/* <Pokeball /> */}
      <PokedexSearch />
      <Pokemon id={pokemons[0].id} name={pokemons[0].name} />
      <PokedexViewer pokemons={pokemons}/>
    </main>
  )
}

export default PokedexPage