import {useState} from "react";
import {useDispatch} from "react-redux";
import {addHorse} from "../../store/Slices/HorseSlice.jsx";

const HorseForm = () => {

    const [horse, setHorse] = useState({
        name: ''
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {value, name} = e.target
        setHorse({
            ...horse,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addHorse(horse))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Ajouter une monture</h1>
            <label>
                Nom :
                <input type={'text'} value={horse.name} name={'name'} onChange={handleChange} />
            </label>
            <input type={'submit'} value={'Enregistrer'} />
        </form>
    )
}

export default HorseForm;