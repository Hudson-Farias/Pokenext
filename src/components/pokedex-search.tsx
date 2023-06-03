import styles from "../styles/pokedex-search.module.sass";

export const PokedexSearch = () => {
  return (
      <div className={styles.search}>
        <input type="text" placeholder="Pesquise seu pokémon" />
    </div>
  );
};
