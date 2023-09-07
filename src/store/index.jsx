import {configureStore} from "@reduxjs/toolkit";
import UserSlice, {changeName} from "./Slices/UserSlice.jsx";
import HorseSlice from "./Slices/HorseSlice.jsx";

const proposalMiddleware = (store) => (next) => (action) => {
    const nextAction = next(action)
    const actions = [
        UserSlice.actions.addUser.toString(),
        UserSlice.actions.setUser.toString()
    ]

    if (actions.includes(action.type)) {
        store.dispatch(UserSlice.actions.resetProposals())
    }

    return nextAction
}

const userNameMiddleware = (store) => (next) => (action) => {
    const nextAction = next(action)

    if (action.type === UserSlice.actions.changeUserField.toString() && action.payload.name === 'name') {
        store.dispatch(changeName(action.payload.value))
    }

    return nextAction
}

const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        horse: HorseSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        proposalMiddleware,
        userNameMiddleware
    ])
})

export default store