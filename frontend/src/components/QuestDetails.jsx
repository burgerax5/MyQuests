import React from 'react'

function QuestDetails({ quest }) {
  return (
    <div className="quest-details">
      {quest ? (
        <>
          <h2>{quest.title}</h2>
          <p>{quest.description}</p>
          <ul>
            {quest.steps.map((step, index) => (
              <li key={index}>{ step }</li>
            ))}
          </ul>
        </>
      ) : (
        <>

        </>
      )}
    </div>
  )
}

export default QuestDetails