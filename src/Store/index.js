import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
import counterSlice from "./Counter";
import privacySlice from "./Privacy";

const counterStore = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        privacy:privacySlice.reducer
    }
})

export default counterStore;

// const INITAIL_VAL = {
//     counter:0,
//     privacy:false
// }
// const counterReducer=(store = INITAIL_VAL,action)=>{
//     if(action.type === 'INCREMENT'){
//         return {...store, counter : store.counter + 1 }
//     }
//     else if(action.type === 'DECREMENT'){
//         return {...store,counter : store.counter - 1  }
//     }
//     else if(action.type === 'ADD'){
//         return {...store,counter : store.counter + Number(action.payload.num)}
//     }
//     else if(action.type === 'SUBSTRACT'){
//         return {...store,counter : store.counter - Number(action.payload.num) }
//     }
//     else if(action.type === 'PRIVACY_TOGGLE'){
//         return {...store, privacy : !store.privacy}
//     }
//     return store

// }
// const counterStore = createStore(counterReducer)