import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "./store"
export interface ThemeState{
    isdark:boolean
}

const initialState:ThemeState={
    isdark:false
}

function setTheme(state:any,isdark:boolean){
    state.isdark=isdark;
    const storeTheme = (isdark:boolean):string=>{
        if(isdark){
            return "dark"
        }else{
            return "light"
        }
    }
    localStorage.setItem('theme',storeTheme(state.isdark))
    document.documentElement.setAttribute('data-theme',storeTheme(state.isdark));
}

export const ThemeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme:state=>{
            state.isdark?setTheme(state,false):setTheme(state,true);
        },
        settheme:(state,action)=>{
            if(action.payload==='dark'){
                setTheme(state,true)
            }else{
                setTheme(state,false)
            }
        }
    }
})

export const {toggleTheme,settheme}=ThemeSlice.actions
export const isdark=(state:RootState)=>state.theme.isdark
export default ThemeSlice.reducer