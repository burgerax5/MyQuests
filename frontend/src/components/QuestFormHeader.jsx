import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import QuestCategoryDropdown from './QuestCategoryDropdown'

function QuestFormHeader({ selectedCategory, setCategory }) {
    const categories = ['Commissions', 'World Quests', 'Main Quests', 'Important']
    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(prevState => !prevState)
    }

    return (
        <div className="dialog-header">
            <h2>Add Quest</h2>
            <div className="dialog-header-right">
                <div className="select-category" onClick={toggleDropdown}>
                    { selectedCategory }
                    <FaCaretDown />
                    { showDropdown && <QuestCategoryDropdown 
                    categories={categories} 
                    selectedCategory={selectedCategory} 
                    setCategory={setCategory} /> }
                </div>
            </div>
        </div>
    )
}

export default QuestFormHeader