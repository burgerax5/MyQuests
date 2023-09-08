import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaPlusCircle } from 'react-icons/fa'
import { createQuest, editQuest } from '../features/quests/questSlice'
import QuestFormHeader from './QuestFormHeader'
import { useNavigate } from 'react-router-dom'

function QuestForm({ handleClose, defaultQuestData, operation }) {
  const { category, title, description, questSteps } = defaultQuestData
  const [questData, setQuestData] = useState({
    category, title, description, steps: questSteps
  })
  const [steps, setSteps] = useState(defaultQuestData.steps)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const addStep = () => {
    setSteps(oldSteps => [...oldSteps, ''])
  }

  const onStepChange = (e, index) => {
    setSteps(oldSteps => {
      let newSteps = []
      for (let i = 0; i < steps.length; i++) {
        if (index === i) {
          newSteps = [...newSteps, e.target.value]
        } else {
          newSteps = [...newSteps, oldSteps[i]]
        }
      }
      return newSteps
    })
  }

  const removeStep = (index) => {
    let newSteps = []
    for (let i = 0; i < steps.length; i++) {
      if (i !== index) {
        newSteps.push(steps[i])
      }
    }
    setSteps(newSteps)
  }

  useEffect(() => {
    setQuestData(oldQuestData => ({
      ...oldQuestData,
      steps
    }))
  }, [steps])

  const onChange = (e) => {
    setQuestData(oldQuestData => ({
      ...oldQuestData, 
      [e.target.name]: e.target.value
    }))
  }

  const changeCategory = (newCategory) => {
    setQuestData(oldQuestData => ({
      ...oldQuestData,
      category: newCategory
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (operation === "Add") {
      console.log(questData)
      dispatch(createQuest(questData))
    } else if (operation === "Edit") {
      navigate(0)
      dispatch(editQuest({ questData, id: defaultQuestData._id }))
    }
    handleClose()
  }

  return (
    <>
      <div className="dialog">
        <QuestFormHeader selectedCategory={questData.category} setCategory={changeCategory} operation={operation} />
        <form className="dialog-form" onSubmit={onSubmit}>
          <div className="dialog-page">
            <label htmlFor="title">Quest Name:</label>
            <input value={questData.title} type="text" name="title" onChange={onChange}/>
            <label htmlFor="description" onChange={onChange}>Description:</label>
            <textarea placeholder="Describe the quest..." 
            value={questData.description}
            name="description" 
            style={{resize: "none"}}
            onChange={onChange}
            ></textarea>
          </div>
          <div className="dialog-page">
            <label htmlFor="steps">Steps:</label>
            { steps.map((step, index) => (
              <div className="step-field">
                <input value={step} type="text" name="steps" onChange={(e) => onStepChange(e, index)} />
                <div className="remove-step" onClick={() => removeStep(index)}>X</div>
              </div>
            )) }
            <div className="add-step-btn" onClick={addStep}>
              <FaPlusCircle />
            </div>
            <button 
              type="submit"
              className="add-btn">
              { operation }
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