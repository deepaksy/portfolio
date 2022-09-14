import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";

import type { RootState,AppDispatch } from "./store";

export const useThemeDispatch:()=>AppDispatch=useDispatch
export const useThemeSelector:TypedUseSelectorHook<RootState>=useSelector