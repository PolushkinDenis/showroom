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
            console.log(action.payload.id)
            const index = state.clothes.findIndex(el => el.id === action.payload.id)
            console.log(index)
            state.clothes.splice(index, 1)
        },
        changeCount(state, action) {
            const index = state.clothes.findIndex(el => el.id === action.payload.id)
            state.clothes[index].count = action.payload.count
        }
    }
})

export default cardSlice.reducer
export const { addClother, deleteClother, changeCount } = cardSlice.actions