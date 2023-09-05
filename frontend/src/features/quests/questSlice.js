import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import questService from './questService'

const initialState = {
    quests: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new quest
export const createQuest = createAsyncThunk('quests/create',
    async (questData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await questService.createQuest(questData, token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

// Get user quests
export const getQuests = createAsyncThunk('quests/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await questService.getQuests(token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

export const questSlice = createSlice({
    name: 'quest',
    initialState,
    reduce: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createQuest.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createQuest.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.quests.push(action.payload)
            })
            .addCase(createQuest.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getQuests.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getQuests.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.quests = action.payload
            })
            .addCase(getQuests.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = questSlice.actions
export default questSlice.reducer