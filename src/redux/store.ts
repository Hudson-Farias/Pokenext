"use client";

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import pokedexReducer from "./features/pokedex-slice";

export const store = configureStore({
  reducer: pokedexReducer,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export type RootType = ReturnType<typeof store.getState>;
