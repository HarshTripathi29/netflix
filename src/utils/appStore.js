import { userReducer } from "react"
import {configureStore} from "@reduxjs/toolkit"

export const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
        }
    }
);

