import {configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import themeReducer from "./DarkLightSlice/themeSlice"

const store = configureStore({
	reducer: {theme: themeReducer},
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
})

export default store
