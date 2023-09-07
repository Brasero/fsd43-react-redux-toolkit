import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../store/Selectors/userSelectors.js";
import {selectHorses} from "../../store/Selectors/horseSelectors.js";
import {useEffect, useState} from "react";
import {addCouple} from "../../store/Slices/CoupleSlice.js";


const AddCoupleComponent = () => {

    const users = useSelector(selectUsers)
    const horses = useSelector(selectHorses)
    const dispatch = useDispatch()

    const getEntity = (entityName, value) => {
        const entity = entityName === 'user' ?
            users.filter((user) => user.id == value)[0]
            :
            horses.filter((horse) => horse.name == value)[0]
        console.log(entity)

        return entity
    }

    const initialState = {
        userValue: '',
        horseValue: '',
        couple: {
            user: undefined,
            horse: undefined
        }
    }

    const [couple, setCouple] = useState(initialState)

    useEffect(() => {
        console.log(couple)
    }, [couple]);

    const handleChange = (e) => {
        const {name, value} = e.target
        const fieldName = `${name}Value`;
        setCouple({
            ...couple,
            [fieldName]: value,
            couple: {
                ...couple.couple,
                [name]: getEntity(name, value)
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (couple.couple.user === undefined || couple.couple.horse === undefined) return

        dispatch(addCouple(couple.couple))
        setCouple(initialState)
    }

    return (
        <form className={'coupleForm'} onSubmit={handleSubmit}>
            <h1>Ajouter un couple</h1>
            <div className={'selectGroup'}>
                <div className={'coupleLabel'}>
                    Chevalier
                    <select name={'user'} value={couple.userValue} onChange={handleChange}>
                        <option value={''}>----</option>
                        {
                            users.length > 0 &&
                                users.map((user, index) => {
                                    return <option key={`${user.id}-${index}`} value={user.id}>{user.name}</option>
                                })
                        }
                    </select>
                </div>
                <div className={'coupleLabel'}>
                    Monture
                    <select name={'horse'} value={couple.horseValue} onChange={handleChange}>
                        <option value={''}>----</option>
                        {
                            horses.length > 0 &&
                            horses.map((horse, index) => {
                                return <option key={`${horse.name}-${index}`} value={horse.name}>{horse.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className={'coupleButton'}>
                <input type={'submit'} value={'Enregistrer'} />
            </div>
        </form>
    )
}

export default AddCoupleComponent