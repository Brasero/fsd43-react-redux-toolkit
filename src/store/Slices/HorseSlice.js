import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    horses: [
        {
            name: 'tagada'
        }
    ]
}

const HorseSlice = createSlice({
    name: 'horse',
    initialState,
    reducers: {
        addHorse(state,action) {
            state.horses = state.horses.concat([action.payload])
        },
        removeHorse(state,action) {
            state.horses = state.horses.filter((horse) => horse.name !== action.payload.name)
        }
    }
})

export const {addHorse, removeHorse} = HorseSlice.actions
export default HorseSlice;