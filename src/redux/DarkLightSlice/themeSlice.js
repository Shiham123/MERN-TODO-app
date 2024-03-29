import {createSlice} from "@reduxjs/toolkit"
import {taskList, themeList} from "../../../public/taskList"

const initialState = {tasks: taskList, themeList: themeList}

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme: (state, {payload}) => {
			state.themeList.enabled = payload
		},
		changeIcon: (state, {payload}) => {
			state.themeList.closeNavbar = payload
		},
		changeStar: (state, {payload}) => {
			state.themeList.starred = payload
		},
		showProjectInput: (state, {payload}) => {
			state.themeList.isProjectInput = payload
		},
	},
})

export const {changeTheme, changeIcon, changeStar, showProjectInput} = themeSlice.actions

export default themeSlice.reducer
