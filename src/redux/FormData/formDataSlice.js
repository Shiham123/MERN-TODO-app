import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	tasks: [
		{id: 1, title: "Task one ", project: "hello there", date: "2024-03-22", note: "note one"},
		{id: 2, title: "Task one ", project: "hello there", date: "2024-03-22", note: "note one"},
		{id: 3, title: "Task one ", project: "hello there", date: "2024-03-22", note: "note one"},
		{id: 4, title: "Task one ", project: "hello there", date: "2024-03-22", note: "note one"},
		{id: 5, title: "Task one ", project: "hello there", date: "2024-03-22", note: "note one"},
	],
}

const formDataSlice = createSlice({
	name: "formData",
	initialState,
	reducers: {
		createTask: (state, {payload}) => {
			if (state.tasks.length == 0) {
				state.tasks.push({id: 1, ...payload})
			} else {
				const lastElement = state.tasks.length
				state.tasks.push({id: lastElement + 1, ...payload})
			}
		},
	},
})

export const {createTask} = formDataSlice.actions
export default formDataSlice.reducer
