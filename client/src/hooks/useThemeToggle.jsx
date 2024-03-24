import { useSelector } from "react-redux"

const UseThemeToggle = () => {
	const theme = useSelector((state) => state.theme.enabled)

	const themeSelection = (text, character) => {
		return theme ? `${text}-dark-bg-${character}` : `${text}-light-bg-${character}`
	}

	const headingColor = (text, character) => {
		return theme ? `${text}-dark-text-${character}` : `${text}-text-${character}`
	}

	const toggleBtn = (para) => {
		return theme ? `${para}-dark-text-secondary` : `${para}-text-secondary`
	}

	return { toggleBtn, headingColor, themeSelection }
}

export default UseThemeToggle
