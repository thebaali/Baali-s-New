import { createSlice } from "@reduxjs/toolkit";
export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0,
        data:[]
    },
    reducers:{
        incremeant:(state)=>{
            state.value += 1
        }
    },
    decremennt:(state)=>{
        state.value -= 1
    },

})
export const {incremeant,decremennt,}=counterSlice.actions
export const selectCount=(state)=>state.counter.value
export default counterSlice.reducer