const { createSlice } = require("@reduxjs/toolkit");

const counterSlice =createSlice({
    name:'counter',
    initialState:{counterVal: 0},
    reducers:{
        increment : (state) => {
            state.counterVal++;
        },
        decrement : (state) => {
            state.counterVal--;
        },
        add : (state,action) => {
            // console.log('inside of add ', action)
            state.counterVal += Number(action.payload.num)
        },
        substract : (state,action) => {
            state.counterVal -= Number(action.payload)
        }
    }
    })

    export const counterAction = counterSlice.actions
    export default counterSlice