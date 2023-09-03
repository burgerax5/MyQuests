import { useState } from 'react'
import '../css/quest.css'

import QuestIcon from '../images/quest_icon.png'

function QuestNavbar() {
    const [selected, setSelected] = useState(0)

    const onClickHandler = (index) => {
        setSelected(index)
    }

    return (
        <nav className="quest-nav">
            <div className="quest-icon">
                <img src={QuestIcon} />
            </div>
            <ul>
                <li
                    className={ `${ selected === 0 && "selected" }` }
                    onClick={() => onClickHandler(0)}>A</li>
                <li
                    className={ `${ selected === 1 && "selected" }` }
                    onClick={() => onClickHandler(1)}>B</li>
                <li
                    className={ `${ selected === 2 && "selected" }` }
                    onClick={() => onClickHandler(2)}>C</li>
                <li
                    className={ `${ selected === 3 && "selected" }` }
                    onClick={() => onClickHandler(3)}>D</li>
                <li
                    className={ `${ selected === 4 && "selected" }` }
                    onClick={() => onClickHandler(4)}>E</li>
            </ul>
        </nav>
    )
}

export default QuestNavbar