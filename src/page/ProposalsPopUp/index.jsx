import {useDispatch, useSelector} from "react-redux";
import {selectProposals} from "../../store/Selectors/userSelectors.js";
import {setUser} from "../../store/Slices/UserSlice.jsx";

const ProposalsPopUp = () => {

    const proposals = useSelector(selectProposals)
    const dispatch = useDispatch()

    if (proposals.length === 0) return

    const handleClick = (town) => {
        dispatch(setUser(town))
    }

    return (
        <div className={'popup'}>
            <ul>
                {
                    proposals.map((proposal, index) => {
                        return <li key={`${proposal.name}-${index}`} onClick={() => handleClick(proposal)} className={'proposal'}>{`${proposal.name} (${proposal.zipCode})`}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ProposalsPopUp