const TodoButton = () => {
	return (
		<div>
			<div className="flex flex-col justify-start items-start my-4 gap-[10px] border-2 border-black">
				<button className="text-[#7a8aa4] font-Lexend bg-[#d3dee3]">All</button>
				<button className="text-[#7a8aa4] font-Lexend">Starred</button>
				<button className="text-[#7a8aa4] font-Lexend">Today</button>
				<button className="text-[#7a8aa4] font-Lexend">Week</button>
			</div>
		</div>
	)
}

export default TodoButton
