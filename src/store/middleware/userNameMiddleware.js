import UserSlice, {changeName} from "../Slices/UserSlice.js";

const userNameMiddleware = (store) => (next) => (action) => {
    const nextAction = next(action)

    if (action.type === UserSlice.actions.changeUserField.toString() && action.payload.name === 'name') {
        store.dispatch(changeName(action.payload.value))
    }

    return nextAction
}

export default userNameMiddleware