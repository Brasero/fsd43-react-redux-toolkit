import {NavLink} from "react-router-dom";
import './nav.css';

const navStyle = ({isActive}) => {
    return {
        color: isActive ? 'var(--primary-color)' : 'var(--inactive-color)',
    }
}

const Nav = () => {

    return (
        <nav className={'nav'}>
            <NavLink style={navStyle} className={'nav_link'} to={'/'} >Formulaire utilisateur</NavLink>
            <NavLink style={navStyle} className={'nav_link'} to={'/userList'}>Liste des utilisateurs</NavLink>
            <NavLink style={navStyle} className={'nav_link'} to={'/horseForm'} >Formulaire de monture</NavLink>
            <NavLink style={navStyle} className={'nav_link'} to={'/horseList'}>Liste de montures</NavLink>
            <NavLink style={navStyle} className={'nav_link'} to={'/addCouple'}>Ajouter un couple</NavLink>
        </nav>
    )
}

export default Nav