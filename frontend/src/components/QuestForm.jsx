import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaCaretDown, FaPlusCircle } from 'react-icons/fa'

function QuestForm({ handleClose }) {

  const [questData, setQuestData] = useState({
    title: "",
    description: "",
    steps: [],
  })

  const addStep = () => {

  }

  return (
    <>
      <div className="dialog">
        <div className="dialog-header">
          <h2>Add Quest</h2>
          <div className="dialog-header-right">
            <div className="select-category">
              Commissions
              <FaCaretDown />
            </div>
            {/* <div className="select-options">

            </div> */}
          </div>
        </div>
        <form className="dialog-form">
          <div className="dialog-page">
            <label htmlFor="quest-name">Quest Name:</label>
            <input type="text" name="quest_name" />
            <label htmlFor="quest-description">Description:</label>
            <textarea placeholder="Describe the quest..." name="quest-description" style={{resize: "none"}}></textarea>
          </div>
          <div className="dialog-page">
            <label htmlFor="quest-step">Steps:</label>
            <input type="text" name="quest-step" />
            <div className="add-step-btn" onClick={addStep}>
              <FaPlusCircle />
            </div>
            <button 
              type="submit"
              className="add-btn">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="overlay"
        onClick={handleClose}
        style={{ display: "block" }}></div>
    </>
  )
}

export default QuestForm