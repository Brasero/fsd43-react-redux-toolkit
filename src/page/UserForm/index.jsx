import {useState} from "react";
import {useDispatch} from "react-redux";
import {addUser} from "../../store/Slices/UserSlice.jsx";

const UserForm = () => {

    const dispatch = useDispatch()

    const initialUser = {
        name: '',
        townName: ''
    }

    const [user, setUser] = useState(initialUser)

    const handleChange = (e) => {
        const {value, name} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser(user))
        setUser(initialUser)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Ajouter un utilisateur</h1>
            <label>
                Nom :
                <input type={'text'} name={'name'} value={user.name} onChange={handleChange} />
            </label>
            <label>
                Ville :
                <input type={'text'} name={'townName'} value={user.townName} onChange={handleChange} />
            </label>
            <input type={'submit'} value={'Enregistrer'} />
        </form>
    )
}

export default UserForm