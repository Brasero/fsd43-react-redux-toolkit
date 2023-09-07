import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

let userId = 1;

const initialUserField = {
    name: '',
    townName: ''
}

export const fetchTown = createAsyncThunk(
    'user/fetchTown',
    async (data) => {
        const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${data}&type=municipality`)
        return response.data
    }
)

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        proposals: [],
        user: {
            name: '',
            town: {}
        },
        userField: initialUserField
    },
    reducers: {
        addUser(state, action) {
            state.users = state.users.concat([state.user])
        },
        removeUser(state, action) {
            state.users = state.users.filter((user) => user.id !== action.payload.id)
        },
        resetProposals(state, action) {
            state.proposals = []
        },
        changeUserField(state, action) {
            state.userField[action.payload.name] = action.payload.value
        },
        resetUserField(state, action) {
            state.userField = initialUserField
        },
        setUser(state, action) {
            state.user = {
                id: userId++,
                name: state.userField.name,
                town: action.payload
            }
            state.userField.townName = action.payload.name
        },
        changeName(state, action) {
            state.user.name = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTown.pending, (state, action) => {
            console.log('pending fetch')
        });
        builder.addCase(fetchTown.fulfilled, (state, action) => {
            console.log(action.payload)
            state.proposals =
                action.payload.features.reduce(
                    (acc, current) => {
                        acc.push({
                            name: current.properties.name,
                            zipCode: current.properties.postcode,
                            context: current.properties.context
                        })
                        return acc
                    },
                    []
                )
        })
    }
})

export const {changeName, setUser, resetUserField, changeUserField, addUser, removeUser, resetProposals} = UserSlice.actions
export default UserSlice