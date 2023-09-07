import {useDispatch, useSelector} from "react-redux";
import {selectCouples} from "../../store/Selectors/coupleSelector.js";
import {removeCouple} from "../../store/Slices/CoupleSlice.js";

const Couple = ( ) => {

    const couples = useSelector(selectCouples)
    const dispatch = useDispatch()
    const handleClick = (id) => {
        dispatch(removeCouple(id))
    }

    return (
        <div className={'coupleList'}>
            <h1 className={'listTitle'}>Liste de couple</h1>
            {
                couples.length > 0 ? (
                    <ul className={'listContainer'}>
                        {
                            couples.map((couple, index) => {
                                return (
                                    <li key={`${couple.user.id}-${index}`} className={'listItem'}>
                                        <span className={'coupleText'}>{couple.user.name} / {couple.horse.name}</span>
                                        <button
                                            role={'button'}
                                            className={'suppressButton'}
                                            onClick={() => handleClick(couple)}
                                        >
                                            X
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                ) : (
                    <span>Aucun couple de créer actuellement.</span>
                )
            }
        </div>
    )
}

export default Couple