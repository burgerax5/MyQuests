import axios from "axios"

const API_URL = "http://localhost:5000/api/quests/"

// Create new quest
const createQuest = async (questData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const res = await axios.post(API_URL, questData, config)

    return res.data
}

// Get user quests
const getQuests = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const res = await axios.get(API_URL, config)

    return res.data
}

// Delete a quest
const deleteQuest = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        } 
    }

    const res = await axios.delete(API_URL + id, config)

    return res.data
}

const goalService = {
    createQuest,
    getQuests,
    deleteQuest
}

export default goalService