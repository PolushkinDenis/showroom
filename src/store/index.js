import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardReducer";
import cardSlice from "./cardSlice";


const rootReducer = combineReducers({
    card: cardSlice
})

export const store = configureStore({
    reducer: rootReducer,
})