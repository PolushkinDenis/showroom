import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clothes: []
}

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addClother(state, action) {
            let index = state.clothes.findIndex(el => el.id === action.payload.id)
            if (index !== -1) {
                state.clothes[index].count = state.clothes[index].count + action.payload.count
            }
            else {
                state.clothes.push(action.payload)
            }
        },
        deleteClother(state, action) {
            state.clothes.pop(action.payload)
        },
        changeCount(state, action) {
            const index = state.clothes.findIndex(el => el.id === action.payload.id)
            state.clothes[index].count = action.payload.count
        }
    }
})

export default cardSlice.reducer
export const { addClother, deleteClother, changeCount } = cardSlice.actions