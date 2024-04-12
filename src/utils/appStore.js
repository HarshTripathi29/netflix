import  userReducer  from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import cardDetailsReducer from "./cardDetailsSlice"
import {configureStore} from "@reduxjs/toolkit"


export const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
            movies : moviesReducer,
            gpt : gptReducer,
            details : cardDetailsReducer,
        }
    }
);

