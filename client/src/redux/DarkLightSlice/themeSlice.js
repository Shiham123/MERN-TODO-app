import {createSlice} from "@reduxjs/toolkit"

const initialState = {enabled: false, closeNavbar: false, starred: false, completedTask: false}

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme: (state, action) => {
			const {payload} = action
			state.enabled = payload
		},

		changeIcon: (state, {payload}) => {
			state.closeNavbar = payload
		},

		changeStar: (state, action) => {
			const {payload} = action
			state.starred = payload
		},

		completeTask: (state, action) => {
			const {payload} = action
			state.completedTask = payload
		},
	},
})

export const {changeTheme, changeViewport, changeIcon, changeStar, completeTask} =
	themeSlice.actions

export default themeSlice.reducer
