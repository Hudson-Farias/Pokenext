'use client'

import { PokedexSearch } from '../components/pokedex-search'
import { Pokemon } from '../components/pokemon'
import { PokedexViewer } from '../components/pokedex-viewer'

const PokedexPage = async () => {
  return (
    <main>
      <PokedexSearch />
      <Pokemon />
      <PokedexViewer />
    </main>
  )
}

export default PokedexPage