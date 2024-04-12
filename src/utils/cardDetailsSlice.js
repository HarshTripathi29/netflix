import { createSlice } from "@reduxjs/toolkit";

const cardDetailsSlice = createSlice({
    name : "details",
    initialState : {
        cardDetails : null,
        movieCast : null,
    },
    reducers: {
        addCardDetails : (state, action) =>{
            state.cardDetails = action.payload;
        },
        addCast : (state, action) =>{
            state.movieCast = action.payload;
        }
    },
})

export const {addCardDetails, addCast} = cardDetailsSlice.actions ;
export default cardDetailsSlice.reducer ;