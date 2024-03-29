import {createSlice} from "@reduxjs/toolkit"
import {taskList} from "../../../public/taskList"

const formDataSlice = createSlice({
	name: "formData",
	initialState: {tasks: taskList},
	reducers: {
		createTask: (state, {payload}) => {
			if (state.tasks.length == 0) {
				state.tasks.push({id: 1, ...payload})
			} else {
				const lastElement = state.tasks.length
				state.tasks.push({id: lastElement + 1, ...payload})
			}
		},

		completeTask: (state, {payload}) => {
			const {completed, taskId} = payload
			const taskIndex = state.tasks.findIndex((item) => item.id === taskId)
			state.tasks[taskIndex].isCompleted = completed
		},
	},
})

export const {createTask, completeTask} = formDataSlice.actions
export default formDataSlice.reducer
