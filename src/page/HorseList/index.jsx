import {useDispatch, useSelector} from "react-redux";
import {selectHorses} from "../../store/Selectors/horseSelectors.js";
import {removeHorse} from "../../store/Slices/HorseSlice.jsx";

const HorseList = () => {

    const horses = useSelector(selectHorses)
    const dispatch = useDispatch()

    const handleClick = (horse) => {
        dispatch(removeHorse(horse))
    }

    return (
        <>
            <h1>Liste des utilisateurs</h1>
            <ul>
                {
                    horses.length > 0 ? (
                        horses.map((horse, index) => {
                            return (
                                <li key={`${horse.name}-${index}`}>
                                    {horse.name}
                                    <button
                                        role={'button'}
                                        onClick={() => handleClick(horse)}
                                    >X
                                    </button>
                                </li>
                            )
                        })
                    ) : (
                        <span>Aucun utilisateur</span>
                    )
                }
            </ul>
        </>
    )
}

export default HorseList;