import { createSlice } from "@reduxjs/toolkit";
const INITIAL_VALUE = {
    value : 0
}

const counterSlice = createSlice({
    name : 'counter',
    initialState : INITIAL_VALUE,
    reducers:{
    increment : (state) =>{
        state.value += 1
    },
    decrement : (state) =>{
        state.value -= 1
    }
    },
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer