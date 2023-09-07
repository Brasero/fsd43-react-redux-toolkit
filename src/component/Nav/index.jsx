import {NavLink} from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <NavLink to={'/'} >Formulaire</NavLink>
            <NavLink to={'/userList'}>Liste</NavLink>
        </nav>
    )
}

export default Nav