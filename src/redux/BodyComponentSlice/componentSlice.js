import {createSlice} from "@reduxjs/toolkit"

const initialState = {renderElement: "allTask", perTaskId: null}

const componentSlice = createSlice({
	name: "component",
	initialState,
	reducers: {
		changeComponent: (state, {payload}) => {
			state.renderElement = payload
		},
		singleTaskId: (state, {payload}) => {
			state.perTaskId = payload
		},
	},
})

export const {changeComponent, singleTaskId} = componentSlice.actions
export default componentSlice.reducer
