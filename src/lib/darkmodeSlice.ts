import { createSlice } from "@reduxjs/toolkit"

export interface dark {
    dark: boolean
}

const initialState: dark = {
    dark: false
}

export const darkModeSlice = createSlice({
    name: 'Darkmode',
    initialState,
    reducers: {
        darkMode: (state) => {
            state.dark = true
        },
        lightMode: (state) => {
            state.dark = false
        }
    }
})

export default darkModeSlice.reducer
export const Action = darkModeSlice.actions