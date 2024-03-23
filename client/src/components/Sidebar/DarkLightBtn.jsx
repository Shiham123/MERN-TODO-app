import {useDispatch, useSelector} from "react-redux"
import {changeTheme} from "../../redux/DarkLightSlice/themeSlice"

const DarkLightBtn = () => {
	const theme = useSelector((state) => state.theme.enabled)
	const dispatch = useDispatch()

	return (
		<div>
			<div
				onClick={() => dispatch(changeTheme(!theme))}
				className={`${
					theme ? "bg-slate-500" : "bg-zinc-500"
				} inline-flex h-[18px] w-[38px] cursor-pointer shrink-0 rounded-full border-2 border-transparent`}
			>
				<span
					className={`${
						theme ? "translate-x-4" : "translate-x-0"
					} h-[14px] pointer-events-none w-[14px] inline-block rounded-full bg-white ring-0 transition duration-200 ease-in-out`}
				></span>
			</div>
		</div>
	)
}

export default DarkLightBtn
