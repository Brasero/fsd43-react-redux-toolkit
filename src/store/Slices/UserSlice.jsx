import {createSlice} from "@reduxjs/toolkit";
let userId = 1;

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        addUser: {
            reducer: (state, action) => {
                state.users = state.users.concat([action.payload])
            },
            prepare: (user) => {
                return {
                    payload: {
                        ...user,
                        id: userId++
                    }
                }
            }
        },
        removeUser(state, action) {
            state.users = state.users.filter((user) => user.id !== action.payload.id)
        }
    }
})

export const {addUser, removeUser} = UserSlice.actions
export default UserSlice