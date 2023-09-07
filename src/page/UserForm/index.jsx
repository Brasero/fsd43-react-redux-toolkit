import {useState} from "react";
import './userForm.css';
import {useDispatch, useSelector} from "react-redux";
import {addUser, changeUserField, fetchTown, resetProposals, resetUserField} from "../../store/Slices/UserSlice.js";
import ProposalsPopUp from "../ProposalsPopUp/index.jsx";
import {selectUserField} from "../../store/Selectors/userSelectors.js";

const UserForm = () => {

    const dispatch = useDispatch()

    const user = useSelector(selectUserField)

    const handleChange = (e) => {
        const {value, name} = e.target

        if (name === 'townName') {
            if (value.length > 3) {
                dispatch(fetchTown(value))
            }
            else {
                dispatch(resetProposals())
            }
        }

        dispatch(changeUserField({name, value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser())
        dispatch(resetUserField())
        dispatch(resetProposals())
    }

    return (
        <form onSubmit={handleSubmit} className={'userForm'}>
            <h1 className={'form_title'}>Ajouter un utilisateur</h1>
            <label className={'form_label'}>
                Nom :
                <input type={'text'} className={'form_input'} name={'name'} value={user.name} onChange={handleChange} />
            </label>
            <label className={'form_label town_label'}>
                <div className={'form_label'}>
                    Ville :
                    <input type={'text'} className={'form_input'} name={'townName'} value={user.townName} onChange={handleChange} />
                </div>
                <ProposalsPopUp />
            </label>
            <input className={'form_button'} type={'submit'} value={'Enregistrer'} />
        </form>
    )
}

export default UserForm