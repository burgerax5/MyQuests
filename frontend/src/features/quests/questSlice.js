import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    quests: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const questSlice = createSlice({
    name: 'Quest',
    initialState,
    reduce: {
        reset: (state) => initialState
    }
})

export const { reset } = questSlice.actions
export default questSlice.reducer