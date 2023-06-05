export interface PokemonInterface {
    id: number,
    name: string,
    color: string,
    types: string[],
    species_id: number,

    atk?: number,
    hp?: number,
    def?: number,
    spatk?: number,
    spdef?: number,
    speed?: number,
}

export interface PokemonsByNameInterface {
    pokemons: PokemonInterface[] | []
    regex: string
}

export interface InitialStateInterface {
    pokemon: PokemonInterface | null,
    pokemons: PokemonInterface[] | [],
    pokemonsByName: PokemonsByNameInterface
}