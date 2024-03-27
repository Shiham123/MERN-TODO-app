import {Outlet} from "react-router-dom"
import Heading from "../components/Heading"
import {useSelector} from "react-redux"

const MainLayout = () => {
	const theme = useSelector((state) => state.theme.enabled)

	return (
		<div className={`${theme ? "bg-darkBgPrimary" : "bg-lightBgPrimary"} min-h-screen`}>
			<Heading />
			<Outlet />
		</div>
	)
}

export default MainLayout
