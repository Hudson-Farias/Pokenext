'use client'

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit' 
import { PokemonInterface, PokemonsByNameInterface, InitialStateInterface } from '../../interfaces/pokemon'

export const getPokemon = createAsyncThunk<PokemonInterface, { id: string }>('pokedex/getPokemon', async ({ id }) => {
    const response = await fetch(`https://pokemon-api-ddmm.onrender.com/pokedex/pokemon/id/${id}`)
    const pokemon = await response.json()
    return pokemon

})

export const getPokemons = createAsyncThunk<PokemonInterface[], { page: string }>('pokedex/getPokemons', async ({ page }) => {
    const response = await fetch(`https://pokemon-api-ddmm.onrender.com/pokedex/page/${page}`)
    const pokemons = await response.json()
    return pokemons
})

export const getPokemonsByName = createAsyncThunk<PokemonsByNameInterface, { regex: string }>('pokedex/getPokemonsByName', async ({ regex }) => {
    if (regex.length == 0) return {pokemons: [], regex: ''}
    
    const response = await fetch(`https://pokemon-api-ddmm.onrender.com/pokedex/pokemon/name/${regex}`)
    const pokemons = await response.json() as PokemonInterface[]

    console.log(pokemons)
    return { pokemons, regex }
})


const initialState: InitialStateInterface = {
    pokemon: null,
    pokemons: [],
    pokemonsByName: {
        pokemons: [],
        regex: ''
    }
}

export const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getPokemon.fulfilled, (state, action: PayloadAction<PokemonInterface>) => {
            state.pokemon = action.payload
        }),

        builder.addCase(getPokemons.fulfilled, (state, action: PayloadAction<PokemonInterface[]>) => {
            state.pokemons = [...state.pokemons, ...action.payload]
        }),

        builder.addCase(getPokemonsByName.fulfilled, (state, action: PayloadAction<PokemonsByNameInterface>) => {
            state.pokemonsByName = action.payload
        })
    }
})

const pokedexReducer = pokedexSlice.reducer
export default pokedexReducer 