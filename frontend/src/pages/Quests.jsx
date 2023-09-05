import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import QuestNavbar from '../components/QuestNavbar'
import QuestsList from '../components/QuestsList'
import QuestForm from '../components/QuestForm'

function Quests() {
  const categories = ['In Progress', 'Commissions', 'World Quests', 'Main Quests', 'Important']
  const [selected, setSelected] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  const handleOpen = () => {
    setShowModal(true)    
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className="quests-container">
      {user && <>
        <QuestNavbar selected={selected} setSelected={setSelected} />
        <div className="quests-content-wrapper">
          <h1>{categories[selected]}</h1>
          <div className="quests-content">
            
          </div>
          <div className="quest-buttons">
            <button onClick={handleOpen}>Add Quest</button>
            <button>Edit Quest</button>
          </div>
        </div>
        { showModal && <QuestForm handleClose={handleClose} /> }
      </>}
    </div>
  )
}

export default Quests