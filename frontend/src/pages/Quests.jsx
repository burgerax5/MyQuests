import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getQuests, reset } from '../features/quests/questSlice'

import QuestNavbar from '../components/QuestNavbar'
import QuestsList from '../components/QuestsList'
import QuestDetails from '../components/QuestDetails'
import QuestForm from '../components/QuestForm'
import Spinner from '../components/Spinner'
import QuestDeletePrompt from '../components/QuestDeletePrompt'

function Quests() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { quests, isLoading, isError, message } = useSelector((state) => state.quest)

  const getQuestsByCategory = () => {
    let questsByCategory = {
      "Commissions": [],
      "World Quests": [],
      "Main Quests": [],
      "Important": []
    }

    quests.map(quest => {
      questsByCategory[quest.category].push(quest)
    })

    return questsByCategory
  }

  const questsByCategory = getQuestsByCategory()
  const categories = ['In Progress', 'Commissions', 'World Quests', 'Main Quests', 'Important']
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [selectedQuest, setSelectedQuest] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showDeletePrompt, setShowDeletePrompt] = useState(false)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getQuests())

    // return () => {
    //   dispatch(reset())
    // }
  }, [user, navigate, isError, message, dispatch])

  useEffect(() => {
    selectedCategory !== 'In Progress' && questsByCategory[selectedCategory].length > 0 ? (
      setSelectedQuest(questsByCategory[selectedCategory][0])
    ) : (
      setSelectedQuest(null)
    )
    // setSelectedQuest(null)
  }, [selectedCategory])

  const handleOpen = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="quests-container">
      {user && <>
        <QuestNavbar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <div className="quests-content-wrapper">
          <h1>{selectedCategory}</h1>
          <div className="quests-content">
            <QuestsList questsByCategory={questsByCategory}
              selectedCategory={selectedCategory}
              selectedQuest={selectedQuest}
              setSelectedQuest={setSelectedQuest} />
            <QuestDetails quest={selectedQuest} />
          </div>
          <div className="quest-buttons">
            <button onClick={handleOpen}>Add Quest</button>
            <div className="selected-quest-buttons">
              {selectedQuest && <button onClick={() => setShowDeletePrompt(true)}>Delete Quest</button>}
              {selectedQuest && <button>Edit Quest</button>}
            </div>
          </div>
        </div>
        {showModal && <QuestForm handleClose={handleClose} />}
        {showDeletePrompt && <QuestDeletePrompt 
        selectedQuest={selectedQuest} 
        handleClose={() => setShowDeletePrompt(false)}/>}
      </>}
    </div>
  )
}

export default Quests