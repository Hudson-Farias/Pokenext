'use client'

import Image from 'next/image'
import React from 'react'

import styles from '../styles/pokemon.module.sass'

import type { RootType } from '../redux/store'
import { useSelector } from 'react-redux'

export const Pokemon = () => {
  const capitalizeFirstLetter = (str: string) =>  str.charAt(0).toUpperCase() + str.slice(1)

  const pokemon = useSelector((state: RootType) => state.pokemon)

  return (
      <div className={styles.pokemonInfo}>
        <div className={styles.pokeball}></div>

        { pokemon ?
          <div className={styles.pokemonCard}>
            <Image className={styles.pokemonImage} src={`/images/pokemon/${pokemon.id}.png`} alt={pokemon.name} width={200} height={200}/>
            <div className={styles.pokemonLabel}>
              <p>Nº{pokemon.id}</p>
              <p>{capitalizeFirstLetter(pokemon.name)}</p>
              <p>HP: {pokemon.hp}</p>
              <p>ATK: {pokemon.atk}</p>
              <p>DEF: {pokemon.def}</p>
              <p>SP ATK: {pokemon.spatk}</p>
              <p>SP DEF: {pokemon.spdef}</p>
              <p>SPEED: {pokemon.speed}</p>
            </div>
          </div> : <div className={styles.pokemonCard}></div>
          }
          
      </div>
  )
}
