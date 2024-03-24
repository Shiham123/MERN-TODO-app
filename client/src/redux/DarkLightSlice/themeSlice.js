import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	enabled: false,
}

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme: (state, action) => {
			const {payload} = action
			state.enabled = payload
		},
	},
})

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer
