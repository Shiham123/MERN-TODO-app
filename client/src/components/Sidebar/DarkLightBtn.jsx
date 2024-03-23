import {useState} from "react"

const DarkLightBtn = () => {
	const [enabled, setEnabled] = useState(false)

	return (
		<div>
			<div
				onClick={() => setEnabled(!enabled)}
				className={`${
					enabled ? "bg-slate-500" : "bg-zinc-500"
				} inline-flex h-[18px] w-[38px] cursor-pointer shrink-0 rounded-full border-2 border-transparent`}
			>
				<span
					className={`${
						enabled ? "translate-x-4" : "translate-x-0"
					} h-[14px] pointer-events-none w-[14px] inline-block rounded-full bg-white ring-0 transition duration-200 ease-in-out`}
				></span>
			</div>
		</div>
	)
}

export default DarkLightBtn
