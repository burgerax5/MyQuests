import React from 'react'

function QuestItem({ quest, selectedQuest, setSelectedQuest }) {
    const onClick = () => {
        setSelectedQuest(quest)
    }

    return (
        <div className={`quest-item ${selectedQuest && selectedQuest._id === quest._id ? 'selected' : ''}`} onClick={onClick}>
            {quest.title}
        </div>
    )
}

export default QuestItem