"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import styles from "../styles/pokedex-viewer.module.sass";

import type { RootType } from "../redux/store";
import { useSelector } from "react-redux";

import { getPokemon, getPokemons } from "../redux/features/pokedex-slice";
import { useAppDispatch } from "../redux/store";

export const PokedexViewer = () => {
  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  const dispatch = useAppDispatch();

  const pokemonsByName = useSelector((state: RootType) => state.pokemonsByName);
  const pokemons = useSelector((state: RootType) => state.pokemons);

  const pokedex =
    pokemonsByName.pokemons.length != 0 || pokemonsByName.regex.length != 0
      ? pokemonsByName.pokemons
      : pokemons;

  useEffect(() => {
    const fetchPokemons = async () => {
      await dispatch(getPokemons({ page: "1" }));
      await dispatch(getPokemons({ page: "2" }));
      await dispatch(getPokemons({ page: "3" }));
    };

    fetchPokemons();
  }, [dispatch]);

  const setPokemon = async (event: React.MouseEvent<HTMLLIElement>) => {
    const id = event.currentTarget.getAttribute("data-id");
    await dispatch(getPokemon({ id }));
  };

  return (
    <ul className={styles.pokedexViewer}>
      {pokedex.length != 0 &&
        pokedex.map((pokemon) => (
          <li
            className={styles.pokemonViewerCard}
            data-id={pokemon.id}
            key={pokemon.id}
            onClick={setPokemon}
          >
            <Image
              className={styles.pokemonViewerImage}
              src={`/images/pokemon/${pokemon?.id}.png`}
              alt={pokemon?.name}
              width={150}
              height={150}
            />
            <div className={styles.pokemonViewerLabel}>
              <p>Nº{pokemon?.id}</p>
              <p>{capitalizeFirstLetter(pokemon?.name)}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};
