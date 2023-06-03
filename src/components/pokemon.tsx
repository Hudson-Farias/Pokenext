import Image from 'next/image';
import React from 'react'

import styles from "../styles/pokemon.module.sass";

interface PokemonProps {
  id: number,
  name: string
}

export const Pokemon: React.FC<PokemonProps>  = ({id, name}) => {
  const capitalizeFirstLetter = (str: string) =>  str.charAt(0).toUpperCase() + str.slice(1)

  return (
      <div className={styles.pokemonInfo}>
        <div className={styles.pokemonCard}>
            <Image className={styles.pokemonImage} src={`/images/pokemon/${id}.png`} alt={name} width={150} height={150}/>
            <div className={styles.pokemonLabel}>
              <p>Nº{id}</p>
              <p>{capitalizeFirstLetter(name)}</p>
            </div>
            </div>
      </div>
  );
};
