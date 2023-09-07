import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/quest.css'

import QuestIcon from '../images/quest_icon.png'

function QuestNavbar({ selectedCategory, setSelectedCategory }) {
    const navigate = useNavigate()

    const onClickHandler = (category) => {
        setSelectedCategory(category)
        // const url_extension = category.toLowerCase().replace(' ', '_')
        // navigate(`/quests/${url_extension}`)
    }

    return (
        <nav className="quest-nav">
            <div className="quest-icon">
                <img src={QuestIcon} />
            </div>
            <ul>
                <li
                    className={ `${ selectedCategory === 'In Progress' ? "selected" : "" }` }
                    onClick={() => onClickHandler('In Progress')}>A</li>
                <li
                    className={ `${ selectedCategory === 'Commissions' ? "selected" : "" }` }
                    onClick={() => onClickHandler('Commissions')}>B</li>
                <li
                    className={ `${ selectedCategory === 'World Quests' ? "selected" : "" }` }
                    onClick={() => onClickHandler('World Quests')}>C</li>
                <li
                    className={ `${ selectedCategory === 'Main Quests' ? "selected" : "" }` }
                    onClick={() => onClickHandler('Main Quests')}>D</li>
                <li
                    className={ `${ selectedCategory === 'Important' ? "selected" : "" }` }
                    onClick={() => onClickHandler('Important')}>E</li>
            </ul>
        </nav>
    )
}

export default QuestNavbar