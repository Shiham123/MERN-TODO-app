import {createSlice} from "@reduxjs/toolkit"

const initialState = {enabled: false, viewport: false, closeNavbar: false}

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

		changeIcon: (state, {payload}) => {
			state.closeNavbar = payload
		},
	},
})

export const {changeTheme, changeViewport, changeIcon} = themeSlice.actions

export default themeSlice.reducer
