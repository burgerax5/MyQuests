import React from 'react'

function QuestItem({ quest }) {
    return (
        <div className="quest-item">
            {quest.title}
        </div>
    )
}

export default QuestItem