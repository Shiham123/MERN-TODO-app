import {useDispatch, useSelector} from "react-redux"
import {LuAlignJustify} from "react-icons/lu"
import {LiaTimesSolid} from "react-icons/lia"
import {useEffect} from "react"

import {changeIcon, changeViewport} from "../redux/DarkLightSlice/themeSlice"

const Heading = () => {
	const {enabled, viewport} = useSelector((state) => state.theme)
	const dispatch = useDispatch()

	useEffect(() => {
		const handleResize = () => {
			dispatch(changeViewport(window.innerWidth <= 768))
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [dispatch])

	return (
		<div className="flex justify-between items-center container max-w-2xl mx-auto p-4">
			{/* div */}
			<div className="my-8">
				<span
					className={`text-5xl font-Lexend ${
						enabled ? "text-darkTextPrimary" : "text-textPrimary"
					}`}
				>
					to
				</span>
				<span
					className={`text-5xl font-Lexend ${
						enabled ? "text-darkTextSecondary" : "text-textSecondary"
					}`}
				>
					do.
				</span>
			</div>
			{/* div two */}
			<div>
				{viewport && (
					<>
						<LiaTimesSolid size={40} color={enabled ? "#7f5bf7" : "#f8917e"} />
						<LuAlignJustify
							className="cursor-pointer"
							onClick={() => dispatch(changeViewport(false), changeIcon(true))}
							size={40}
							color={enabled ? "#7f5bf7" : "#f8917e"}
						/>
					</>
				)}
			</div>
		</div>
	)
}

export default Heading
