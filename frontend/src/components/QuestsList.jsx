import React from 'react'
import QuestItem from './QuestItem'

function QuestsList({ quests, selectedCategory, selectedQuest, setSelectedQuest }) {
  return (
    <div className="quests-list">
      {quests.map((quest) => {
        if (quest.category === selectedCategory || selectedCategory === 'In Progress') {
          return <QuestItem key={quest._id} quest={quest} 
          selectedQuest={selectedQuest} setSelectedQuest={setSelectedQuest} />
        }
      })}
    </div>
  )
}

export default QuestsList