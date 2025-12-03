function Dropdown({ currentChoice, data, isOpen, handleClick, toggleDropdown }) {

	const onClick = (city) => {
		handleClick(city)
	}
	
	return (
		<div className="relative block text-left w-[16rem]">
			{/* <div> */}
			<button
				onClick={toggleDropdown}
				className=" inline-flex w-[16rem] justify-center w-full rounded-md 
                    border border-gray-300 shadow-sm px-4 py-2 bg-black 
                    text-sm font-medium text-silver-200 hover:bg-black 
                    focus:outline-none"
			>
				{!isOpen && currentChoice}
				<svg
					className="ml-2 -mr-1 h-5 w-5"
					xmlns="https://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="white"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			{/* </div> */}

			{isOpen && (
				<div
					className="absolute w-[16rem] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none"
					role="menu"
				>
					<div className="" role="none">
						{
							data.map((item) => {

								return <p
									key={`${item}/city`}

									onClick={() => onClick(item)}

									className="block py-4 text-[1.5rem] text-night hover:bg-gray-100 pl-5 cursor-pointer" role="menuitem">
									{item}
								</p>
							})
						}
					</div>
				</div>
			)}
		</div>
	)
}

export default Dropdown