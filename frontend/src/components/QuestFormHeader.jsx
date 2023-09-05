import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import QuestCategoryDropdown from './QuestCategoryDropdown'

function QuestFormHeader() {
    return (
        <div className="dialog-header">
            <h2>Add Quest</h2>
            <div className="dialog-header-right">
                <div className="select-category">
                    Commissions
                    <FaCaretDown />
                    <QuestCategoryDropdown />
                </div>
            </div>
        </div>
    )
}

export default QuestFormHeader