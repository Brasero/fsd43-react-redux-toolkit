import UserSlice from "../Slices/UserSlice.js";

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

export default proposalMiddleware