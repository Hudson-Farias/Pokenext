import Image from 'next/image';
import React from 'react'

import styles from "../styles/pokedex-viewer.module.sass"

type Pokemon = {
  id: number,
  name: string
}

interface PokedexViewerProps {
  pokemons: Pokemon[]
}

export const PokedexViewer: React.FC<PokedexViewerProps>  = ({ pokemons }) => {
  const capitalizeFirstLetter = (str: string) =>  str.charAt(0).toUpperCase() + str.slice(1)

  return (
      <ul className={styles.pokedexViewer}>
        {pokemons && pokemons.map(pokemon => (
          <li className={styles.pokemonViewerCard} key={pokemon?.id}>
            <Image className={styles.pokemonViewerImage} src={`/images/pokemon/${pokemon?.id}.png`} alt={pokemon?.name} width={150} height={150}/>
            <div className={styles.pokemonViewerLabel}>
              <p>Nº{pokemon?.id}</p>
              <p>{capitalizeFirstLetter(pokemon?.name)}</p>
            </div>
        </li>
        ))}
    </ul>
  )
}