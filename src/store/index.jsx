import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice.jsx";

const store = configureStore({
    reducer: {
        user: UserSlice.reducer
    }
})

export default store