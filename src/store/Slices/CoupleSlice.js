import {createSlice} from "@reduxjs/toolkit";
import couple from "../../component/Couple/index.jsx";

const CoupleSlice = createSlice({
    name: 'couple',
    initialState: {
        couples: []
    },
    reducers: {
        addCouple(state,action) {
            state.couples = state.couples.concat([action.payload])
        },
        removeCouple(state,action) {
            state.couples = state.couples.filter((couple) => couple.user.id !== parseInt(action.payload.user.id))
        }
    }
})

export const {addCouple, removeCouple} = CoupleSlice.actions

export default CoupleSlice.reducer