import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice.js";
import HorseSlice from "./Slices/HorseSlice.js";
import CoupleReducer from "./Slices/CoupleSlice.js"
import userNameMiddleware from "./middleware/userNameMiddleware.js";
import proposalMiddleware from "./middleware/proposalMiddleware.js";
import coupleMiddleware from "./middleware/coupleMiddleware.js";


const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        horse: HorseSlice.reducer,
        couple: CoupleReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        proposalMiddleware,
        userNameMiddleware,
        coupleMiddleware
    ])
})

export default store