import { useDispatch } from "react-redux"
import { deleteQuest } from '../features/quests/questSlice'
import { useNavigate } from "react-router-dom"

function QuestDeletePrompt({ selectedQuest, handleClose }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>
            {selectedQuest !== null && <>
                <div className="delete-quest-modal">
                    <p>Are you sure you want to delete the quest:</p>
                    <span>{selectedQuest.title}</span>
                    <div className="btn-area">
                        <button onClick={handleClose}>Cancel</button>
                        <button onClick={() => {
                            dispatch(deleteQuest(selectedQuest._id))
                            handleClose()
                            navigate(0)
                        }}>Confirm</button>
                    </div>
                </div>
                <div className="overlay" 
                onClick={handleClose}
                style={{display: "block"}}></div>
            </>}
        </>
    )
}

export default QuestDeletePrompt