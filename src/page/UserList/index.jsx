import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../store/Slices/UserSlice.js";

const UserList = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.users)

    const handleClick = (user) => {
        dispatch(removeUser(user))
    }

    return (
        <>
            <h1>Liste des utilisateurs</h1>
            <ul>
                {
                    users.length > 0 ? (
                        users.map((user, index) => {
                            return (
                                <li key={`${user.name}-${index}`}>
                                    {user.name}
                                    <button
                                        role={'button'}
                                        onClick={() => handleClick(user)}
                                    >X</button>
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

export default UserList