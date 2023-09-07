import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaPlusCircle } from 'react-icons/fa'
import { createQuest } from '../features/quests/questSlice'
import QuestFormHeader from './QuestFormHeader'

function QuestForm({ handleClose }) {
  const defaultQuestData = {
    category: "Commissions",
    title: "",
    description: "",
    steps: [],
  }

  const [questData, setQuestData] = useState(defaultQuestData)
  const [steps, setSteps] = useState([])

  const dispatch = useDispatch()

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
    console.log(newSteps)
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
    dispatch(createQuest(questData))
    handleClose()
  }

  return (
    <>
      <div className="dialog">
        <QuestFormHeader selectedCategory={questData.category} setCategory={changeCategory} />
        <form className="dialog-form" onSubmit={onSubmit}>
          <div className="dialog-page">
            <label htmlFor="title">Quest Name:</label>
            <input type="text" name="title" onChange={onChange}/>
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