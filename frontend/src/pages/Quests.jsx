import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import QuestNavbar from '../components/QuestNavbar'

function Quests() {
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <div className="quests-container">
      { user && <>
        <QuestNavbar />
      </> }
    </div>
  )
}

export default Quests