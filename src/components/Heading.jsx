import {useDispatch, useSelector} from "react-redux"
import {LuAlignJustify} from "react-icons/lu"
import {LiaTimesSolid} from "react-icons/lia"

import {changeIcon} from "../redux/DarkLightSlice/themeSlice"

const Heading = () => {
	const {enabled, closeNavbar} = useSelector((state) => state.theme.themeList)
	const dispatch = useDispatch()

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
			<div className="md:block sm:block xs:block lg:hidden xl:hidden 2xl:hidden z-[60]">
				{closeNavbar ? (
					<LiaTimesSolid
						className="cursor-pointer"
						size={40}
						onClick={() => dispatch(changeIcon(false))}
						color={enabled ? "#7f5bf7" : "#f8917e"}
					/>
				) : (
					<LuAlignJustify
						className="cursor-pointer"
						size={40}
						onClick={() => dispatch(changeIcon(true))}
						color={enabled ? "#7f5bf7" : "#f8917e"}
					/>
				)}
			</div>
		</div>
	)
}

export default Heading
