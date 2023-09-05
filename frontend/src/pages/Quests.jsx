import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getQuests, reset } from '../features/quests/questSlice'

import QuestNavbar from '../components/QuestNavbar'
import QuestsList from '../components/QuestsList'
import QuestForm from '../components/QuestForm'
import QuestItem from '../components/QuestItem'
import Spinner from '../components/Spinner'

function Quests() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { quests, isLoading, isError, message } = useSelector((state) => state.quest)

  const categories = ['In Progress', 'Commissions', 'World Quests', 'Main Quests', 'Important']
  const [selected, setSelected] = useState(0)
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
        <QuestNavbar selected={selected} setSelected={setSelected} />
        <div className="quests-content-wrapper">
          <h1>{categories[selected]}</h1>
          {quests.length > 0 ? (
            <>
              <div className="quests-content">
                <div className="quests-list">
                  {quests.map((quest) => (
                    <QuestItem key={quest._id} quest={quest} />
                  ))}
                </div>
              </div>
              <div className="quest-buttons">
                <button onClick={handleOpen}>Add Quest</button>
                <button>Edit Quest</button>
              </div>
            </>
          ) : (
            <>
              <h2>No Quests Available.</h2>
              <div className="quest-buttons">
                <button onClick={handleOpen}>Add Quest</button>
              </div>
            </>
          )}
        </div>
        {showModal && <QuestForm handleClose={handleClose} />}
      </>}
    </div>
  )
}

export default Quests