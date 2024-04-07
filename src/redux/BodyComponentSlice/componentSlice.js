import {createSlice} from "@reduxjs/toolkit"

const initialState = {renderElement: "allTask"}

const componentSlice = createSlice({
	name: "component",
	initialState,
	reducers: {
		changeComponent: (state, action) => {
			const {payload} = action
			state.renderElement = payload
		},
	},
})

export const {changeComponent} = componentSlice.actions
export default componentSlice.reducer
