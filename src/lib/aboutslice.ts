import { createSlice } from "@reduxjs/toolkit";


interface props {
    about: number
}

const initialState:props = {
    about: 1
}

export const AboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        Array1: (state) => {
            state.about = 1
            console.log(state.about)
        },
        Array2: (state) => {
            state.about = 2
        },
        Array3: (state) => {
            state.about = 3
        }
    }
})

export default AboutSlice.reducer
export const Actions = AboutSlice.actions