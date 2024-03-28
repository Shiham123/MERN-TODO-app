import {configureStore} from "@reduxjs/toolkit"
import logger from "redux-logger"
import themeReducer from "./DarkLightSlice/themeSlice"
import componentReducer from "./BodyComponentSlice/componentSlice"
import formDataSlice from "./FormData/formDataSlice"

const store = configureStore({
	reducer: {theme: themeReducer, component: componentReducer, formData: formDataSlice},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
