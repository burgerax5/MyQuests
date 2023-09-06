import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getQuests, reset } from '../features/quests/questSlice'

import QuestNavbar from '../components/QuestNavbar'
import QuestsList from '../components/QuestsList'
import QuestDetails from '../components/QuestDetails'
import QuestForm from '../components/QuestForm'
import Spinner from '../components/Spinner'

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

  const categories = ['In Progress', 'Commissions', 'World Quests', 'Main Quests', 'Important']
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [selectedQuest, setSelectedQuest] = useState(null)
  const [showModal, setShowModal] = useState(false)

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
    setSelectedQuest(null)
    console.log("HUH")
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
            <QuestsList questsByCategory={getQuestsByCategory()}
              selectedCategory={selectedCategory}
              selectedQuest={selectedQuest}
              setSelectedQuest={setSelectedQuest} />
            <QuestDetails quest={selectedQuest} />
          </div>
          <div className="quest-buttons">
            <button onClick={handleOpen}>Add Quest</button>
            <button>Edit Quest</button>
          </div>
        </div>
        {showModal && <QuestForm handleClose={handleClose} />}
      </>}
    </div>
  )
}

export default Quests