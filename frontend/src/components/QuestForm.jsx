import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaPlusCircle } from 'react-icons/fa'
import { createQuest } from '../features/quests/questSlice'
import QuestFormHeader from './QuestFormHeader'

function QuestForm({ handleClose }) {
  const defaultQuestData = {
    category: "",
    title: "",
    description: "",
    steps: [],
  }

  const [questData, setQuestData] = useState(defaultQuestData)
  const [showDropdown, setShowDropdown] = useState(false)

  const dispatch = useDispatch()

  const addStep = () => {

  }

  const onChange = (e) => {
    setQuestData(oldQuestData => ({
      ...oldQuestData, 
      [e.target.name]: e.target.name === "steps" ? [...oldQuestData.steps, e.target.value] : e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createQuest(questData))

  }

  return (
    <>
      <div className="dialog">
        <QuestFormHeader />
        <form className="dialog-form" onSubmit={onSubmit}>
          <div className="dialog-page">
            <label htmlFor="title">Quest Name:</label>
            <input type="text" name="title" onChange={onChange}/>
            <label htmlFor="description" onChange={onChange}>Description:</label>
            <textarea placeholder="Describe the quest..." name="description" style={{resize: "none"}}></textarea>
          </div>
          <div className="dialog-page">
            <label htmlFor="steps">Steps:</label>
            <input type="text" name="steps" onChange={onChange} />
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