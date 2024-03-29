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
	},
})

export const {changeTheme, changeIcon, changeStar, completeTask} = themeSlice.actions

export default themeSlice.reducer
