import { configureStore } from "@reduxjs/toolkit";
import { AboutSlice } from './aboutslice';
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { darkModeSlice } from './darkmodeSlice';
import { NavFunc } from './headerFunc';


export const store = configureStore({
    reducer: {
        About: AboutSlice.reducer,
        dark: darkModeSlice.reducer,
        Nav: NavFunc.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false 
    }),
 
})

export const useStoreDispatch: () => typeof store.dispatch= useDispatch
export const useStoreSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector