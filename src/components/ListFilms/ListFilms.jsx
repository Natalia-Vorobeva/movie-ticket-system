function ListFilms({ handleClickFilms, ticket, films, selectFilmModal, setSelectFilmModal }) {

	const handleChoiceModal = (item, hall) => {
		setSelectFilmModal(false)
		handleClickFilms(item, hall)
	}
	const handleChoice = (item) => {
		handleClickFilms(item)
	}

	return (
		<div className="py-2 w-4/5 text-[1.8rem]">
			{
				selectFilmModal ?
					<div className="absolute z-10 inset-0 pt-2 w-[100%] text-[1rem] min-h-full bg-maxblack flex flex-col text-[.5rem] p-1 rounded-md">
						<p className='font-medium pt-4 pb-10 text-[2rem]  py-10'>Выберите фильм</p>
						<div className="flex ">
							<div className="flex gap-4 flex-wrap justify-between w-[100%]">
								{
									films.halls_films.map((item, index) => {
										const hallIndex = index + 1
										return (
											<div key={`${item}/halls_films`}>
												<p className="py-10">Зал {index + 1}</p>
												{
													item?.map((item, index) => {
														return <div key={`${index}/films`}
															className="w-full text-orange flex gap-2 border-b">
															<p>{item}</p>
															<span onClick={() => handleChoiceModal({ film: item, hall: hallIndex })} className="ml-8 pb-2 text-white cursor-pointer">Выбрать</span>
														</div>
													})
												}
											</div>)
									})
								}
							</div>
						</div>
						<div className='pt-[2rem] pr-[1rem] flex justify-end'>
							<p className="cursor-pointer inline" onClick={() => setSelectFilmModal(false)}>Закрыть</p>
						</div>
					</div>
					:
					null
			}
			<div className="pb-[1rem]">
				<p className='font-medium pt-4 pb-10 text-[3rem]'>Выберите фильм</p>
				<div className="text-ellipsis line-clamp-8 text-[1.2rem]">
					{
						films.films?.map((item, index) => {
							return <div key={`${index}/films`}
								className="">
								<p className="inline cursor-pointer hover:text-blue"
									onClick={() => handleChoice({ film: item })}
								>
									{item}
								</p>
							</div>
						})
					}
				</div>
				<div className="relative z-1">
					<p onClick={() => setSelectFilmModal(true)}
						className="relative z-1 text-orange pt-[1rem] cursor-pointer text-[1.5rem] italic">{ticket ? "ВАШ БИЛЕТ:" : "Больше..."}</p>
				</div>
			</div>
		</div>
	)
}

export default ListFilms