import {createSlice} from "@reduxjs/toolkit"

const initialState = {enabled: false, viewport: false}

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme: (state, action) => {
			const {payload} = action
			state.enabled = payload
		},

		changeViewport: (state, action) => {
			const {payload} = action
			state.viewport = payload
		},
	},
})

export const {changeTheme, changeViewport} = themeSlice.actions

export default themeSlice.reducer
