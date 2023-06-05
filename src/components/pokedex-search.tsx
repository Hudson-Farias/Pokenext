"use client";

import { ChangeEvent, useState } from "react";

import styles from "../styles/pokedex-search.module.sass";

import { getPokemonsByName } from "../redux/features/pokedex-slice";
import { useAppDispatch } from "../redux/store";

export const PokedexSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  const searchPokemons = async (event: ChangeEvent<HTMLInputElement>) => {
    const regex = event.target.value.trim();

    setInputValue(regex);
    await dispatch(getPokemonsByName({ regex }));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Pesquise seu pokémon"
        value={inputValue}
        onChange={searchPokemons}
      />
    </div>
  );
};
