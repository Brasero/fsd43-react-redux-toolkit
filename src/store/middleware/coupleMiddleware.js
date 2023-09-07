import {addCouple, removeCouple} from "../Slices/CoupleSlice.js";
import {addUserFromCouple, removeUser} from "../Slices/UserSlice.js";
import {addHorse, removeHorse} from "../Slices/HorseSlice.js";

const coupleMiddleware = (store) => (next) => (action) => {

    const nextAction = next(action)

    if(action.type === addCouple.toString()) {
        store.dispatch(removeUser(action.payload.user))
        store.dispatch(removeHorse(action.payload.horse))
    }

    if(action.type === removeCouple.toString()) {
        store.dispatch(addUserFromCouple(action.payload.user))
        store.dispatch(addHorse(action.payload.horse))
    }

    return nextAction;

}

export default coupleMiddleware