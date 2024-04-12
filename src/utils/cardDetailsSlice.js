import { createSlice } from "@reduxjs/toolkit";

const cardDetailsSlice = createSlice({
    name : "details",
    initialState : {
        cardDetails : null,
    },
    reducers: {
        addCardDetails : (state, action) =>{
            state.cardDetails = action.payload;
        },
    },
})

export const {addCardDetails} = cardDetailsSlice.actions ;
export default cardDetailsSlice.reducer ;