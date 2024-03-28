import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	tasks: [
		{
			id: 1,
			status: "pending",
			taskName: "Task one",
			taskNote: "Note one",
			taskProject: "hello there",
			taskDate: "2024-03-22",
		},
	],
}

const formDataSlice = createSlice({
	name: "formData",
	initialState,
	reducers: {
		addTask: (state, action) => {
			const {payload} = action
			state.tasks = [...state.tasks, payload]
		},
	},
})

export const {addTask} = formDataSlice.actions
export default formDataSlice.reducer
