import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Navigation {
    home: boolean,
    about: boolean,
    project: boolean,
    certificate: boolean,
    contact: boolean
}

const initialState: Navigation = {
    home: true,
    about: false,
    project: false,
    certificate: false,
    contact: false
}


export const NavFunc = createSlice({
    name: 'Navigation',
    initialState,
    reducers: {
        scrollToHome: (state, action: PayloadAction<{name: React.RefObject<HTMLDivElement>}>) => {
            action.payload.name.current?.scrollIntoView({behavior: 'smooth'})
            state.home = true
            state.about = false
            state.certificate = false
            state.project = false
            state.contact = false
        },
        scrollToAbout: (state, action: PayloadAction<{about: React.RefObject<HTMLDivElement>}>) => {
            action.payload.about.current?.scrollIntoView({behavior: 'smooth'})
            state.home = false
            state.about = true
            state.certificate = false
            state.project = false
            state.contact = false
        },
        scrollToProject: (state, action: PayloadAction<{name: React.RefObject<HTMLDivElement>}>) => {
            action.payload.name.current?.scrollIntoView({behavior: 'smooth'})
            state.home = false
            state.about = false
            state.certificate = false
            state.project = true
            state.contact = false
        },
        scrollToCert: (state, action: PayloadAction<{name: React.RefObject<HTMLDivElement>}>) => {
            action.payload.name.current?.scrollIntoView({behavior: 'smooth'})
            state.home = false
            state.about = false
            state.certificate = true
            state.project = false
            state.contact = false
        },
        scrollToContact: (state, action: PayloadAction<{name: React.RefObject<HTMLDivElement>}>) => {
            action.payload.name.current?.scrollIntoView({behavior: 'smooth'})
            state.home = false
            state.about = false
            state.certificate = false
            state.project = false
            state.contact = true
        }
    }
})
export default NavFunc.reducer
export const Action = NavFunc.actions