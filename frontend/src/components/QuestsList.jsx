import React from 'react'
import QuestItem from './QuestItem'

function QuestsList({ questsByCategory, selectedCategory, selectedQuest, setSelectedQuest }) {

  const displayQuestsByCategory = () => {
    Object.entries(questsByCategory).map(keyPair => {
      const category = keyPair[0]
      const quests = keyPair[1]

      return (
        <>
          <h3>{category}</h3>
          {quests.map(quest => {
            <QuestItem key={quest._id} quest={quest}
              selectedQuest={selectedQuest} setSelectedQuest={setSelectedQuest} />
          })}
        </>
      )
    })
  }

  // if (quest.category === selectedCategory || selectedCategory === 'In Progress') {
  //   return <QuestItem key={quest._id} quest={quest}
  //     selectedQuest={selectedQuest} setSelectedQuest={setSelectedQuest} />
  // }

  return (
    <div className="quests-list">
      {Object.entries(questsByCategory).map(keyPair => {
        const category = keyPair[0]
        const quests = keyPair[1]

        return (
          selectedCategory === 'In Progress' ? (
            <>
                <h3>{category}</h3>
                {quests.map(quest => {
                  return <QuestItem key={quest._id} quest={quest}
                    selectedQuest={selectedQuest} setSelectedQuest={setSelectedQuest} />
                })}
              </>
          ) : (
              <>
                { selectedCategory === category && <h3>{category}</h3> }
                {quests.map(quest => {
                  if (quest.category === selectedCategory) {
                    return <QuestItem key={quest._id} quest={quest}
                    selectedQuest={selectedQuest} setSelectedQuest={setSelectedQuest} />
                  }
                })}
              </>
          )
        )
      })}
    </div>
  )
}

export default QuestsList