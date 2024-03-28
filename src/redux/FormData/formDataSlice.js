import {createSlice} from "@reduxjs/toolkit"

const initialState = {
	tasksArr: [],
}

const formDataSlice = createSlice({
	name: "formData",
	initialState,
	reducers: {
		createTask: (state, {payload}) => {
			state.tasksArr.push(payload)
		},
	},
})

export const {createTask} = formDataSlice.actions
export default formDataSlice.reducer
