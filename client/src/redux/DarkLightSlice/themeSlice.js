import {createSlice} from "@reduxjs/toolkit"

const initialState = {enabled: false, closeNavbar: false}

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
	},
})

export const {changeTheme, changeViewport, changeIcon} = themeSlice.actions

export default themeSlice.reducer
