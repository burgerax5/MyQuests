import React from 'react'

function QuestCategoryDropdown({ categories, setCategory }) {
    return (
        <div className="category-dropdown">
            {categories.map(category => (
                <div key={category} className="category-option" onClick={() => setCategory(category)}>{ category }</div>
            ))}
        </div>
    )
}

export default QuestCategoryDropdown