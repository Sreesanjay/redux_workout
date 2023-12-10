import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchUser = createAsyncThunk("cart/fetchUser", async (id)=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    // console.log(response.data)
    return response.data
})

const INITIAL_STATE = {
    cartList : [],
    userDetails : {}
};
const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers:{
        addToCart:(state,action) => {

            const itemExist = state.cartList.find((item) => item?.id === action.payload?.id);
            if(itemExist) {
                itemExist.count++;
            }else{
                state.cartList.push({
                    ...action.payload,
                    count : 1
                })
            }
        },
        increment:(state,action)=>{
            const productId = action.payload
            state.cartList.forEach((item)=>{
                if(item.id === productId){
                    item.count++;
                }
            })
        },
        decrement:(state,action)=>{
            const productId = action.payload
            state.cartList.forEach((item)=>{
                if(item.id === productId){
                    item.count--;
                }
            })
        },

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.pending,(state,action)=>{console.log("loading start")})
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.userDetails = action.payload
        })
        .addCase(fetchUser.rejected,(state,action)=>{console.log("rejected")})
    }
});

export const {increment,decrement,addToCart} = cartSlice.actions;
export default cartSlice.reducer
